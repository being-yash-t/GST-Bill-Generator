import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {HelperText, Text, TextInput, useTheme} from 'react-native-paper';
import {BayerDataFormProp} from '../../AppNavigation';
import CustomButton from '../components/CustomButton';
import {BayerData} from '../models/DataModels';
import * as yup from 'yup';
import {Alert} from 'react-native';
import {saveBayerData} from '../services/SqliteHelper';

const Validation = yup.object<BayerData>({
  bayerName: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),
  email: yup.string().email('Invalid email').required('Cannot be empty'),
  gstTin: yup
    .string()
    .min(15, 'Size should be 15 characters')
    .max(15, 'Size should be 15 characters')
    .required('Cannot be empty'),
  siteAddress: yup.string().required('Cannot be empty'),
  stateText: yup
    .string()
    .min(4, 'Miminum 4 characters')
    .required('Cannot be empty'),
  id: yup.number(),
});

const BayerDataForm: React.FC<BayerDataFormProp> = ({navigation, route}) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{...route.params.data}}
        validationSchema={Validation}
        onSubmit={(values: BayerData, {}: FormikHelpers<BayerData>) =>
          saveBayerData(values).then(
            () => {
              navigation.goBack();
              console.log('Success');
            },
            (error: Error) => {
              console.error(error);
              navigation.goBack();
              Alert.alert('Failed to save', error.message, undefined);
            },
          )
        }>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <TextInput
              mode="outlined"
              value={values.bayerName}
              error={errors.bayerName != undefined}
              label="Bayer Name"
              textContentType="organizationName"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={30}
              onBlur={handleBlur('bayerName')}
              onChangeText={handleChange('bayerName')}
            />
            {errors.bayerName && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.bayerName != undefined}>
                {errors.bayerName}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.gstTin}
              error={errors.gstTin != undefined}
              label="GST TIN"
              autoCapitalize="characters"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={15}
              onBlur={handleBlur('gstTin')}
              onChangeText={handleChange('gstTin')}
            />
            {errors.gstTin && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.gstTin != undefined}>
                {errors.gstTin}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.email}
              error={errors.email != undefined}
              label="Email Address"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={30}
              textContentType="emailAddress"
              keyboardType="email-address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.email != undefined}>
                {errors.email}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.siteAddress}
              error={errors.siteAddress != undefined}
              label="Site Address"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={40}
              onBlur={handleBlur('siteAddress')}
              onChangeText={handleChange('siteAddress')}
            />
            {errors.siteAddress && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.siteAddress != undefined}>
                {errors.siteAddress}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.stateText}
              error={errors.stateText != undefined}
              label="State Name"
              style={{marginHorizontal: 16, marginVertical: 8}}
              autoCapitalize="characters"
              numberOfLines={1}
              maxLength={25}
              onBlur={handleBlur('stateText')}
              onChangeText={handleChange('stateText')}
            />
            {errors.stateText && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.stateText != undefined}>
                {errors.stateText}
              </HelperText>
            )}
            <CustomButton text="Save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default BayerDataForm;
