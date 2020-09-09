import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const OldBillsPage: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>Old Bills</Text>
    </View>
  );
};

OldBillsPage.options = {
  topBar: {
    title: {
      text: 'Old Bills',
    },
  },
};

export default OldBillsPage;
