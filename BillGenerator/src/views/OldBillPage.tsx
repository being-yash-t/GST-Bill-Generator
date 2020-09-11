import * as React from 'react';
import {View, Text} from 'react-native';

const OldBillsPage: React.FC = () => {
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

export default OldBillsPage;
