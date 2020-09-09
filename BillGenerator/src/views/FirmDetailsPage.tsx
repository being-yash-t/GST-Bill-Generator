import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const FirmDetailsPage: NavigationFunctionComponent = ({componentId}) => {
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

FirmDetailsPage.options = {
  topBar: {
    title: {
      text: 'Firm Details',
    },
  },
};

export default FirmDetailsPage;
