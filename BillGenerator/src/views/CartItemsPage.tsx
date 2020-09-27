import * as React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {FAB, Portal, Text} from 'react-native-paper';
import {CartItemProp} from '../../AppNavigation';
import {CartItem} from '../models/DataModels';
import CartItemCard from '../components/CartItemCard';
import {getAllCartItems} from '../services/SqliteHelper';

const CartItemsPage: React.FC<CartItemProp> = ({navigation}) => {
  const isFocused = useIsFocused();

  const [cartItems, setCarItems] = React.useState<CartItem[]>();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllCartItems().then(
        (data) => {
          setCarItems(data);
          console.log('Updated');
        },
        (error) => {
          console.error('failed to get data');
          console.log(error);
        },
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={(lItem) => (
          <CartItemCard
            data={lItem.item}
            icon="pencil-outline"
            onPress={() => navigation.push('CartItemForm', {data: lItem.item})}
          />
        )}
        keyExtractor={(item) => item.id!.toString()}
      />
      <Portal>
        <FAB
          icon="plus"
          visible={isFocused}
          style={{
            position: 'absolute',
            bottom: 36,
            right: 16,
          }}
          color="white"
          onPress={() =>
            navigation.push('CartItemForm', {data: CartItem.blank()})
          }
        />
      </Portal>
    </>
  );
};

export default CartItemsPage;
