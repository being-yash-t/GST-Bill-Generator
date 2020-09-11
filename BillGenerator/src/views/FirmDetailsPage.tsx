import * as React from 'react';
import {View, Text} from 'react-native';

const FirmDetailsPage: React.FC = () => {
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
