import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const NewBillPage: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>New Bills Page</Text>
    </View>
  );
};

NewBillPage.options = {
  topBar: {
    title: {
      text: 'New Bill',
    },
  },
};

export default NewBillPage;
