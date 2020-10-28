import React from 'react';
import Modal from 'react-native-modal';
import {gestureHandlerRootHOC, ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import BankDetailsCard from '../../components/BankDetailsCard';
import BayerDataCard from '../../components/BayerDataCard';
import CartItemCard from '../../components/CartItemCard';
import FirmDataCard from '../../components/FirmDataCard';
import {
  BankDetails,
  BayerData,
  CartItem,
  FirmData,
} from '../../models/DataModels';

type BottomModelProps = {
  modalVisible: boolean;
  setModalVisible: (set: boolean) => void;
  data: FirmData[] | CartItem[] | BayerData[] | BankDetails[];
  returnItem: (item: FirmData | CartItem | BayerData | BankDetails) => void;
};

function getCardType(
  data: FirmData[] | CartItem[] | BayerData[] | BankDetails[],
) {
  console.log('Checking list type');
  if (data[0] instanceof FirmData) return FirmDataCard;
  else if (data[0] instanceof CartItem) return CartItemCard;
  else if (data[0] instanceof BayerData) return BayerDataCard;
  else if (data[0] instanceof BankDetails) return BankDetailsCard;
  else throw Error('Unknown Type requested');
}

const SheetViews = gestureHandlerRootHOC(function GestureExample({
  setModalVisible,
  data,
  returnItem,
}: BottomModelProps) {
  const CardType = getCardType(data);
  const listTiles: Element[] = [];
  data.forEach(
    (item: FirmData | CartItem | BayerData | BankDetails, index: number) => {
      listTiles[index] = (
        // @ts-ignore
        <CardType
          key={index}
          icon="check"
          // @ts-ignore
          data={item}
          onPress={() => {
            returnItem(item);
            setModalVisible(false);
          }}
        />
      );
    },
  );
  return <ScrollView>{listTiles}</ScrollView>;
});

const BottomPicker: React.FC<BottomModelProps> = (props: BottomModelProps) => {
  return (
    <Modal
      isVisible={props.modalVisible}
      onBackButtonPress={() => props.setModalVisible(false)}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <SheetViews {...props} />
    </Modal>
  );
};

export default BottomPicker;
export type {BottomModelProps};
