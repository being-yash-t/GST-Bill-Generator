import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Divider, IconButton, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {CartItem} from '../models/DataModels';

const CartItemCard: React.FC<{
  data: CartItem;
  onPress?: () => void;
  icon?: IconSource;
}> = ({onPress, data, icon}) => {
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
          <Text style={{fontSize: 18, marginBottom: 8}}>{data.title}</Text>
          <Divider />
          <Text style={{marginVertical: 4, marginTop: 8}}>
            Rate: {data.rate}
          </Text>
          <Text style={{marginVertical: 4}}>Per: {data.per}</Text>
          <Text style={{marginTop: 4}}>HSN Code: {data.hsnCode}</Text>
        </View>
        {icon && (
          <IconButton icon={icon} color={colors.text} onPress={onPress} />
        )}
      </View>
    </View>
  );
};

export default CartItemCard;
