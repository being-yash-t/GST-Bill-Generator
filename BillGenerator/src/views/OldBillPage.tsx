import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

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
