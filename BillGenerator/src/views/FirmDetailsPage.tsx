import * as React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {FirmDetailsPageProp} from '../../AppNavigation';

const FirmDetailsPage: React.FC<FirmDetailsPageProp> = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RectButton
          onPress={() => navigation.push('FirmDataForm', {data: null})}>
          <Text
            style={{
              margin: 16,
              fontFamily: 'Montserrat-Regular',
            }}>
            Create
          </Text>
        </RectButton>
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
