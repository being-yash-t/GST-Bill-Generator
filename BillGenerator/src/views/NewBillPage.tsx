import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const NewBillPage: React.FC = () => {
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

export default NewBillPage;
