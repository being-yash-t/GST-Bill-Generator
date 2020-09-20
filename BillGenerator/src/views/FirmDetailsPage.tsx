import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FAB, Portal} from 'react-native-paper';
import {FirmDetailsPageProp} from '../../AppNavigation';
import FirmDataCard from '../components/FirmDataCard';
import {FirmData} from '../models/DataModels';
import {getAllFirmData} from '../services/SqliteHelper';

const FirmDetailsPage: React.FC<FirmDetailsPageProp> = ({navigation}) => {
  const isFocused = useIsFocused();
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

  return (
    <>
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
      <Portal>
        <FAB
          icon="plus"
          visible={isFocused}
          style={{
            position: 'absolute',
            bottom: 36,
            right: 16,
          }}
          color="white"
          onPress={() =>
            navigation.push('FirmDataForm', {data: FirmData.blank()})
          }
        />
      </Portal>
    </>
  );
};

export default FirmDetailsPage;
