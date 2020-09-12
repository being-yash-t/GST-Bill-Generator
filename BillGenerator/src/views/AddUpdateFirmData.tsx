import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, TextInput, useTheme} from 'react-native-paper';
import {FirmDataFormProp} from '../../AppNavigation';
import HeaderButton from '../components/HeaderButton';

const AddUpdateFirmDataPage: React.FC<FirmDataFormProp> = ({navigation}) => {
  const colors = useTheme().colors;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => navigation.goBack()}
          buttonText="Save"
          textStyle={{color: colors.primary}}
        />
      ),
    });
  }, []);
  return (
    <ScrollView>
      <TextInput
        mode="outlined"
        placeholder="Firm Name"
        style={{margin: 16}}
        numberOfLines={1}
        maxLength={20}
      />
      <TextInput
        mode="outlined"
        placeholder="Address"
        style={{margin: 16}}
        numberOfLines={1}
        maxLength={20}
      />
      <TextInput
        mode="outlined"
        placeholder="Phone no"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        style={{margin: 16}}
        numberOfLines={1}
        maxLength={20}
      />
      <TextInput
        mode="outlined"
        placeholder="GST TIN"
        style={{margin: 16}}
        autoCapitalize="characters"
        numberOfLines={1}
        maxLength={15}
      />
      <TextInput
        mode="outlined"
        placeholder="State"
        textContentType="addressState"
        style={{margin: 16}}
        numberOfLines={1}
        maxLength={20}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={{margin: 16}}
        numberOfLines={1}
        maxLength={20}
      />
    </ScrollView>
  );
};

export default AddUpdateFirmDataPage;
