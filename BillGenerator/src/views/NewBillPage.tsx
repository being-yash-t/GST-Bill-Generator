import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {Alert, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Divider, Modal, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import BankDetailsCard from '../components/BankDetailsCard';
import BayerDataCard from '../components/BayerDataCard';
import CartItemCard from '../components/CartItemCard';
import FirmDataCard from '../components/FirmDataCard';
import {BankDetails, BayerData, CartItem, FirmData} from '../models/DataModels';
import {
  getAllBankData,
  getAllBayers,
  getAllCartItems,
  getAllFirmData,
} from '../services/SqliteHelper';
import BottomPicker from './NewBillPageComponents/BottomPicker';

const TypeHead: React.FC<{
  imageIcon: string;
  title: string;
  onPress: () => void;
}> = ({imageIcon, title, onPress}) => {
  const colors = useTheme().colors;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{margin: 8, flex: 1, fontSize: 18}}>{title}</Text>
      <RectButton onPress={onPress}>
        <Icon
          style={{fontSize: 25, margin: 8}}
          color={colors.text}
          name={imageIcon}
        />
      </RectButton>
    </View>
  );
};

const NewBillPage: React.FC = () => {
  const [bottomListData, setBottomList] = React.useState<
    FirmData[] | CartItem[] | BayerData[] | BankDetails[]
  >([]);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const [selectedFirm, setFirm] = React.useState<FirmData>();
  const [selectedBayer, setBayer] = React.useState<BayerData>();
  const [selectedParticulars, setParticulars] = React.useState<CartItem[]>([]);
  const [selectedBankDetails, setBankDetails] = React.useState<BankDetails>();

  return (
    <>
      <ScrollView>
        <TypeHead
          title="Firm Info"
          imageIcon="edit"
          onPress={() =>
            getAllFirmData().then(
              (data) => {
                setBottomList(data);
                setModalVisible(true);
              },
              (error) => Alert.alert('Failed to get data'),
            )
          }
        />
        <Divider />
        {selectedFirm && <FirmDataCard data={selectedFirm} />}
        <TypeHead
          title="Bayer Info"
          imageIcon="edit"
          onPress={() => {
            getAllBayers().then(
              (data) => {
                setBottomList(data);
                setModalVisible(true);
              },
              (error) => Alert.alert('Failed to get data'),
            );
          }}
        />
        <Divider />
        {selectedBayer && <BayerDataCard data={selectedBayer} />}
        <TypeHead
          title="Particulars"
          imageIcon="add-to-list"
          onPress={() => {
            getAllCartItems().then(
              (data) => {
                const listToShow = data.filter(
                  (item) =>
                    selectedParticulars.find((i) => i.id == item.id) ==
                    undefined,
                );
                if (listToShow.length === 0) {
                  Alert.alert(
                    'All items are used',
                    'No more items pending, try removing existing items',
                  );
                  return;
                }
                setBottomList(listToShow);
                setModalVisible(true);
              },
              (error) => Alert.alert('Failed to get data'),
            );
          }}
        />
        <Divider />
        {selectedParticulars.map((data) => (
          <CartItemCard key={data.id} data={data} />
        ))}
        <TypeHead
          title="Bank Details"
          imageIcon="edit"
          onPress={() => {
            getAllBankData().then(
              (data) => {
                setBottomList(data);
                setModalVisible(true);
              },
              (error) => Alert.alert('Failed to get data'),
            );
          }}
        />
        <Divider />
        {selectedBankDetails && <BankDetailsCard data={selectedBankDetails} />}
      </ScrollView>
      <BottomPicker
        data={bottomListData}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        returnItem={(data) => {
          if (data instanceof FirmData) setFirm(data);
          else if (data instanceof CartItem)
            setParticulars([...selectedParticulars, data]);
          else if (data instanceof BayerData) setBayer(data);
          else if (data instanceof BankDetails) setBankDetails(data);
          else Alert.alert('Error', 'Unknown type selected');
        }}
      />
    </>
  );
};

export default NewBillPage;
