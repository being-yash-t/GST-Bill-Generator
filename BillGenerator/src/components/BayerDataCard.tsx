import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Divider, IconButton, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {BayerData} from '../models/DataModels';

const BayerDataCard: React.FC<{
  data: BayerData;
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
          <Text style={{fontSize: 18}}>{data.bayerName}</Text>
          <Text style={{marginTop: 8}}>{data.email}</Text>
        </View>
        {icon && (
          <IconButton icon={icon} color={colors.text} onPress={onPress} />
        )}
      </View>

      <Divider style={{marginVertical: 4}} />
      <Text style={{marginVertical: 4}}>GST TIN: {data.gstTin}</Text>
      <Text style={{marginVertical: 4}}>Site Address: {data.siteAddress}</Text>
      <Text style={{marginVertical: 4}}>State: {data.stateText}</Text>
    </View>
  );
};
export default BayerDataCard;
