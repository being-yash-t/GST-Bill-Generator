import * as React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text, useTheme} from 'react-native-paper';
import {FirmDetailsPageProp} from '../../AppNavigation';
import HeaderButton from '../components/HeaderButton';
import {FirmData} from '../models/DataModels';
import {getAllFirmData} from '../services/SqliteHelper';

const FirmDetailsPage: React.FC<FirmDetailsPageProp> = ({navigation}) => {
  const colors = useTheme().colors;

  const [firmList, setFirmList] = React.useState<FirmData[]>();

  React.useEffect(() => {
    getAllFirmData().then(
      (data) => {
        setFirmList(data);
      },
      (error) => console.error('failed to get data'),
    );
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
      renderItem={(item) => <Text>{item.item.firmName}</Text>}
      keyExtractor={(item) => item.id!.toString()}
    />
  );
};

export default FirmDetailsPage;
