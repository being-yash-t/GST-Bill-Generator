import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {HelperText, Text, TextInput, useTheme} from 'react-native-paper';
import {FirmDataFormProp} from '../../AppNavigation';
import CustomButton from '../components/CustomButton';
import {FirmData} from '../models/DataModels';
import * as yup from 'yup';
import {saveFirmData} from '../services/SqliteHelper';
import {Alert} from 'react-native';

const Validation = yup.object<FirmData>({
  firmName: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),
  address: yup
    .string()
    .min(4, 'Minimum 4 characters')
    .required('Cannot be empty'),
  emailId: yup.string().email('Invalid email').required('Cannot be empty'),
  gstTin: yup
    .string()
    .min(15, 'Size should be 15 characters')
    .max(15, 'Size should be 15 characters')
    .required('Cannot be empty'),
  phone: yup
    .string()
    .min(10, 'Size should be 10 numbers')
    .required('Cannot be empty'),
  stateText: yup
    .string()
    .min(4, 'Miminum 4 characters')
    .required('Cannot be empty'),
  id: yup.number(),
});

const AddUpdateFirmDataPage: React.FC<FirmDataFormProp> = ({
  navigation,
  route,
}) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{...route.params.data}}
        validationSchema={Validation}
        onSubmit={async (values: FirmData, {}: FormikHelpers<FirmData>) => {
          console.log(values.phone);
          const returnValue = saveFirmData(values);
          if (returnValue instanceof Error) {
            // TODO: failed
            console.error(returnValue.message);
          } else if (returnValue instanceof Promise) {
            returnValue.then(
              () => {
                navigation.goBack();
                console.log('Success');
              },
              (error) => {
                console.error(error);
                navigation.goBack();
                Alert.alert('Failed to save', undefined);
              },
            );
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <TextInput
              mode="outlined"
              value={values.firmName}
              error={errors.firmName != undefined}
              placeholder="Firm Name"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={20}
              onBlur={handleBlur('firmName')}
              onChangeText={handleChange('firmName')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.firmName != undefined}>
              {errors.firmName}
            </HelperText>
            <TextInput
              mode="outlined"
              value={values.address}
              error={errors.address != undefined}
              placeholder="Address"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={50}
              onBlur={handleBlur('address')}
              onChangeText={handleChange('address')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.address != undefined}>
              {errors.address}
            </HelperText>
            <TextInput
              mode="outlined"
              value={values.phone}
              error={errors.phone != undefined}
              placeholder="Phone no"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={12}
              onBlur={handleBlur('phone')}
              onChangeText={handleChange('phone')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.phone != undefined}>
              {errors.phone}
            </HelperText>
            <TextInput
              mode="outlined"
              value={values.gstTin}
              error={errors.gstTin != undefined}
              placeholder="GST TIN"
              style={{marginHorizontal: 16, marginVertical: 8}}
              autoCapitalize="characters"
              numberOfLines={1}
              maxLength={15}
              onBlur={handleBlur('gstTin')}
              onChangeText={handleChange('gstTin')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.gstTin != undefined}>
              {errors.gstTin}
            </HelperText>
            <TextInput
              mode="outlined"
              value={values.stateText}
              error={errors.stateText != undefined}
              placeholder="State"
              textContentType="addressState"
              style={{marginHorizontal: 18, marginVertical: 8}}
              numberOfLines={1}
              maxLength={20}
              onBlur={handleBlur('stateText')}
              onChangeText={handleChange('stateText')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.stateText != undefined}>
              {errors.stateText}
            </HelperText>
            <TextInput
              mode="outlined"
              value={values.emailId}
              error={errors.emailId != undefined}
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={50}
              onBlur={handleBlur('emailId')}
              onChangeText={handleChange('emailId')}
            />
            <HelperText
              style={{marginHorizontal: 8}}
              type="error"
              visible={errors.emailId != undefined}>
              {errors.emailId}
            </HelperText>
            <CustomButton text="Save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddUpdateFirmDataPage;
