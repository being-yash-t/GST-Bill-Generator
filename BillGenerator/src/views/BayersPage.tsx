import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const BayersPage: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>Bayers Page</Text>
    </View>
  );
};

BayersPage.options = {
  topBar: {
    title: {
      text: 'Bayers',
    },
  },
};

export default BayersPage;
