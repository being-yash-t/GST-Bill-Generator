import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const BankDetailsPage: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>Bank Details</Text>
    </View>
  );
};

BankDetailsPage.options = {
  topBar: {
    title: {
      text: 'Bank Details',
    },
  },
};

export default BankDetailsPage;
