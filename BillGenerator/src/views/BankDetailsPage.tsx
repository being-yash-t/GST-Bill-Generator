import * as React from 'react';
import {View, Text} from 'react-native';

const BankDetailsPage: React.FC = () => {
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

export default BankDetailsPage;
