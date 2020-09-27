import * as React from 'react';
import {Alert, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Divider, Modal, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
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
}> = ({imageIcon, title, onPress}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Text style={{margin: 8, flex: 1, fontSize: 18}}>{title}</Text>
    <RectButton onPress={onPress}>
      <Icon style={{fontSize: 25, margin: 8}} name={imageIcon} />
    </RectButton>
  </View>
);

const NewBillPage: React.FC = () => {
  const [bottomListData, setBottomList] = React.useState<
    FirmData[] | CartItem[] | BayerData[] | BankDetails[]
  >([]);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

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
        <TypeHead
          title="Particulars"
          imageIcon="add-to-list"
          onPress={() => {
            getAllCartItems().then(
              (data) => {
                setBottomList(data);
                setModalVisible(true);
              },
              (error) => Alert.alert('Failed to get data'),
            );
          }}
        />
        <Divider />
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
      </ScrollView>
      <BottomPicker
        data={bottomListData}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        returnItem={(item) => console.log('returned item' + item.id)}
      />
    </>
  );
};

export default NewBillPage;
