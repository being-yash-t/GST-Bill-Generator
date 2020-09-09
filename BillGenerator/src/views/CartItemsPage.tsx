import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

const CartItemsPage: NavigationFunctionComponent = ({componentId}) => {
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

CartItemsPage.options = {
  topBar: {
    title: {
      text: 'Cart Items',
    },
  },
};

export default CartItemsPage;
