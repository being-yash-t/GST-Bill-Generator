import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Text, IconButton, Divider} from 'react-native-paper';
import {FirmData} from '../models/DataModels';

const FirmDataCard: React.FC<{data: FirmData; onPress: () => void}> = ({
  onPress,
  data,
}) => {
  const colors = useTheme().colors;
  const [open, setOpen] = React.useState<boolean>(false);
  // TODO: animate
  return (
    <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
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
          <IconButton icon="pencil-outline" onPress={onPress} />
        </View>
        {open && (
          <>
            <Divider style={{marginVertical: 4}} />
            <View style={{margin: 4}}>
              <Text style={{marginVertical: 4}}>GST TIN: {data.gstTin}</Text>
              <Text style={{marginVertical: 4}}>State: {data.stateText}</Text>
              <Text style={{marginVertical: 4}}>Email: {data.emailId}</Text>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FirmDataCard;
