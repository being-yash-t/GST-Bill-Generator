import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {FirmDataFormProp} from '../../AppNavigation';

const AddUpdateFirmDataPage: React.FC<FirmDataFormProp> = ({}) => {
  return (
    <>
      <TextInput
        mode="outlined"
        placeholder="Hell"
        style={{margin: 16}}
        underlineColorAndroid="gray"
        numberOfLines={1}
        maxLength={20}
      />
    </>
  );
};

export default AddUpdateFirmDataPage;
