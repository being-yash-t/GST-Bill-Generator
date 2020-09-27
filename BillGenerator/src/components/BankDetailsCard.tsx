import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Text, IconButton, Divider} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {BankDetails} from '../models/DataModels';

const BankDetailsCard: React.FC<{
  data: BankDetails;
  onPress: () => void;
  icon: IconSource;
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
          <Text style={{fontSize: 18}}>{data.accountNo}</Text>
          <Text style={{marginTop: 8}}>{data.accountName}</Text>
        </View>
        <IconButton icon={icon} onPress={onPress} />
      </View>

      <Divider style={{marginVertical: 4}} />
      <Text style={{marginVertical: 4}}>Bank Name: {data.bankName}</Text>
      <Text style={{marginVertical: 4}}>Branch: {data.bankBranchName}</Text>
      <Text style={{marginVertical: 4}}>IFSC: {data.bankIFSC}</Text>
    </View>
  );
};

export default BankDetailsCard;
