import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FAB, Portal, Text} from 'react-native-paper';
import {BayersPageProp} from '../../AppNavigation';
import BayerDataCard from '../components/BayerDataCard';
import {BayerData} from '../models/DataModels';
import {getAllBayers} from '../services/SqliteHelper';

const BayersPage: React.FC<BayersPageProp> = ({navigation}) => {
  const isFocused = useIsFocused();

  const [firmList, setFirmList] = React.useState<BayerData[]>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllBayers().then(
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
          <BayerDataCard
            data={lItem.item}
            icon="pencil-outline"
            onPress={() => navigation.push('BayerDataForm', {data: lItem.item})}
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
            navigation.push('BayerDataForm', {data: BayerData.blank()})
          }
        />
      </Portal>
    </>
  );
};

export default BayersPage;
