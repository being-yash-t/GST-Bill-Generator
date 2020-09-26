import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {HelperText, Text, TextInput, useTheme} from 'react-native-paper';
import {BankDataFormProp} from '../../AppNavigation';
import CustomButton from '../components/CustomButton';
import {BankDetails} from '../models/DataModels';
import * as yup from 'yup';
import {saveBankData} from '../services/SqliteHelper';
import {Alert} from 'react-native';

const Validation = yup.object<BankDetails>({
  accountName: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),
  accountNo: yup.string().required('Cannot be empty'),
  bankBranchName: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),
  bankIFSC: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),
  bankName: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Cannot be empty'),

  id: yup.number(),
});

const BankDataForm: React.FC<BankDataFormProp> = ({navigation, route}) => {
  return (
    <ScrollView>
      <Formik
        initialValues={{...route.params.data}}
        validationSchema={Validation}
        validateOnBlur={true}
        validateOnChange={true}
        validateOnMount={false}
        onSubmit={(values: BankDetails, {}: FormikHelpers<BankDetails>) =>
          saveBankData(values).then(
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
              value={values.accountName}
              error={errors.accountName != undefined}
              label="Account Name"
              textContentType="organizationName"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={20}
              onBlur={handleBlur('accountName')}
              onChangeText={handleChange('accountName')}
            />
            {errors.accountName && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.accountName != undefined}>
                {errors.accountName}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.accountNo}
              error={errors.accountNo != undefined}
              label="Account No"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={50}
              onBlur={handleBlur('accountNo')}
              onChangeText={handleChange('accountNo')}
            />
            {errors.accountNo && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.accountNo != undefined}>
                {errors.accountNo}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.bankName}
              error={errors.bankName != undefined}
              label="Bank Name"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={12}
              onBlur={handleBlur('bankName')}
              onChangeText={handleChange('bankName')}
            />
            {errors.bankName && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.bankName != undefined}>
                {errors.bankName}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.bankBranchName}
              error={errors.bankBranchName != undefined}
              label="Bank Branch"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={12}
              onBlur={handleBlur('bankBranchName')}
              onChangeText={handleChange('bankBranchName')}
            />
            {errors.bankBranchName && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.bankBranchName != undefined}>
                {errors.bankBranchName}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.bankIFSC}
              error={errors.bankIFSC != undefined}
              label="Bank IFSC"
              style={{marginHorizontal: 16, marginVertical: 8}}
              autoCapitalize="characters"
              numberOfLines={1}
              maxLength={15}
              onBlur={handleBlur('bankIFSC')}
              onChangeText={handleChange('bankIFSC')}
            />
            {errors.bankIFSC && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.bankIFSC != undefined}>
                {errors.bankIFSC}
              </HelperText>
            )}
            <CustomButton text="Save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default BankDataForm;
