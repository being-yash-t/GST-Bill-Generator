import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {CartItem} from '../models/DataModels';

const CartItemCard: React.FC<{data: CartItem; onPress: () => void}> = ({
  data,
  onPress,
}) => {
  const colors = useTheme().colors;
  return (
    <View
      style={{
        margin: 8,
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 8,
        overflow: 'hidden',
        elevation: 2,
      }}>
      <View style={{flexDirection: 'row', margin: 4}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18}}>{data.title}</Text>
          <Text style={{marginTop: 8}}>
            {data.rate} {data.per}
          </Text>
        </View>
        <IconButton icon="pencil-outline" onPress={onPress} />
      </View>
    </View>
  );
};

export default CartItemCard;
