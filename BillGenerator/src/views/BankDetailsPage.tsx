import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FAB, Portal, Text, useTheme} from 'react-native-paper';
import {BankDetailsPageProp} from '../../AppNavigation';
import BankDetailsCard from '../components/BankDetailsCard';
import {BankDetails} from '../models/DataModels';
import {getAllBankData} from '../services/SqliteHelper';

const BankDetailsPage: React.FC<BankDetailsPageProp> = ({navigation}) => {
  const isFocused = useIsFocused();

  const [firmList, setFirmList] = React.useState<BankDetails[]>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllBankData().then(
        (data) => {
          setFirmList(data);
          console.log('Updated');
        },
        (error) => {
          console.error('failed to get data');
          console.log(error);
        },
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <FlatList
        data={firmList}
        renderItem={(lItem) => (
          <BankDetailsCard
            data={lItem.item}
            onPress={() => navigation.push('BankDataForm', {data: lItem.item})}
          />
        )}
        keyExtractor={(item) => item.id!.toString()}
      />
      <Portal>
        <FAB
          icon="plus"
          visible={isFocused}
          style={{
            position: 'absolute',
            bottom: 36,
            right: 16,
          }}
          color='white'
          onPress={() =>
            navigation.push('BankDataForm', {data: BankDetails.blank()})
          }
        />
      </Portal>
    </>
  );
};

export default BankDetailsPage;
