import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Text, useTheme} from 'react-native-paper';
import {FirmDetailsPageProp} from '../../AppNavigation';
import FirmDataCard from '../components/FirmDataCard';
import HeaderButton from '../components/HeaderButton';
import {FirmData} from '../models/DataModels';
import {getAllFirmData} from '../services/SqliteHelper';

const FirmDetailsPage: React.FC<FirmDetailsPageProp> = ({navigation}) => {
  const colors = useTheme().colors;

  const [firmList, setFirmList] = React.useState<FirmData[]>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllFirmData().then(
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
            navigation.push('FirmDataForm', {data: FirmData.blank()})
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
        <FirmDataCard
          data={lItem.item}
          onPress={() => navigation.push('FirmDataForm', {data: lItem.item})}
        />
      )}
      keyExtractor={(item) => item.id!.toString()}
    />
  );
};

export default FirmDetailsPage;
