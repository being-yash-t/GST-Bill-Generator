import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Text, IconButton, Divider} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {FirmData} from '../models/DataModels';

const FirmDataCard: React.FC<{
  data: FirmData;
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
          <Text style={{fontSize: 18}}>{data.firmName}</Text>
          <Text style={{marginTop: 8}}>
            {data.phone}, {data.address}
          </Text>
        </View>
        {icon && (
          <IconButton icon={icon} color={colors.text} onPress={onPress} />
        )}
      </View>

      <Divider style={{marginVertical: 4}} />
      <Text style={{marginVertical: 4}}>GST TIN: {data.gstTin}</Text>
      <Text style={{marginVertical: 4}}>State: {data.stateText}</Text>
      <Text style={{marginVertical: 4}}>Email: {data.emailId}</Text>
    </View>
  );
};

export default FirmDataCard;
