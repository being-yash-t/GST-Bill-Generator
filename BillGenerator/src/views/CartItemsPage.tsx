import * as React from 'react';
import {View, Text} from 'react-native';

const CartItemsPage: React.FC = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text>Cart Items</Text>
    </View>
  );
};

export default CartItemsPage;
