import * as React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text, useTheme} from 'react-native-paper';
import {BankDetailsPageProp} from '../../AppNavigation';
import BankDetailsCard from '../components/BankDetailsCard';
import HeaderButton from '../components/HeaderButton';
import {BankDetails} from '../models/DataModels';
import {getAllBankData} from '../services/SqliteHelper';

const BankDetailsPage: React.FC<BankDetailsPageProp> = ({navigation}) => {
  const colors = useTheme().colors;

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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() =>
            navigation.push('BankDataForm', {data: BankDetails.blank()})
          }
          buttonText="Create"
          textStyle={{color: colors.primary}}
        />
      ),
    });
  }, []);
  return (
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
  );
};

export default BankDetailsPage;
