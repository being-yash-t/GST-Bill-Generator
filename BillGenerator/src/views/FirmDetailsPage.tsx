import * as React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {FirmDetailsPageProp} from '../../AppNavigation';
import HeaderButton from '../components/HeaderButton';

const FirmDetailsPage: React.FC<FirmDetailsPageProp> = ({navigation}) => {
  const colors = useTheme().colors;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => navigation.push('FirmDataForm', {data: null})}
          buttonText="Create"
          textStyle={{color: colors.primary}}
        />
      ),
    });
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>Firm Details</Text>
    </View>
  );
};

export default FirmDetailsPage;
