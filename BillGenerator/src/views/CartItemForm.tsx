import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {HelperText, Text, TextInput, useTheme} from 'react-native-paper';
import {CartItemFormProp} from '../../AppNavigation';
import CustomButton from '../components/CustomButton';
import {CartItem} from '../models/DataModels';
import * as yup from 'yup';
import {saveCartItem} from '../services/SqliteHelper';
import {Alert} from 'react-native';

// @ts-ignore
const Validation = yup.object<CartItem>({
  title: yup.string().required('Cannot be empty'),
  per: yup.string().required('Cannot be empty'),
  hsnCode: yup.number().required('Cannot be empty'),
  quantity: yup.number(),
  rate: yup.number().required('Cannot be empty'),
  id: yup.number(),
});

const CartItemForm: React.FC<CartItemFormProp> = ({navigation, route}) => {
  return (
    <ScrollView>
      <Formik
        //@ts-ignore
        initialValues={{...route.params.data}}
        validationSchema={Validation}
        onSubmit={(values: CartItem, {}: FormikHelpers<CartItem>) =>
          saveCartItem(values).then(
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
              value={values.title}
              error={errors.title != undefined}
              label="Item Name"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={20}
              onBlur={handleBlur('title')}
              onChangeText={handleChange('title')}
            />
            {errors.title && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.title != undefined}>
                {errors.title}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.rate.toString()}
              error={errors.rate != undefined}
              label="Rate"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={50}
              keyboardType="numeric"
              onBlur={handleBlur('rate')}
              onChangeText={handleChange('rate')}
            />
            {errors.rate && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.rate != undefined}>
                {errors.rate}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.per}
              error={errors.per != undefined}
              label="Per"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={12}
              onBlur={handleBlur('per')}
              onChangeText={handleChange('per')}
            />
            {errors.per && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.per != undefined}>
                {errors.per}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              value={values.hsnCode.toString()}
              error={errors.hsnCode != undefined}
              label="HSN Code"
              keyboardType="numeric"
              style={{marginHorizontal: 16, marginVertical: 8}}
              numberOfLines={1}
              maxLength={12}
              onBlur={handleBlur('hsnCode')}
              onChangeText={handleChange('hsnCode')}
            />
            {errors.hsnCode && (
              <HelperText
                style={{marginHorizontal: 8}}
                type="error"
                visible={errors.hsnCode != undefined}>
                {errors.hsnCode}
              </HelperText>
            )}
            <CustomButton text="Save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default CartItemForm;
