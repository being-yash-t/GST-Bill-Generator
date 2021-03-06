import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {
  BankDetails,
  BayerData,
  CartItem,
  FirmData,
} from './src/models/DataModels';
import React from 'react';

const Stack = createStackNavigator();

type RootStackParamList = {
  HomePage: undefined;
  SettingsPage: undefined;
  NewBillPage: undefined;
  CartItemsPage: undefined;
  FirmDetailsPage: undefined;
  BayersPage: undefined;
  BankDetailsPage: undefined;
  OldBillsPage: undefined;
  FirmDataForm: {data: FirmData};
  BankDataForm: {data: BankDetails};
  BayerDataForm: {data: BayerData};
  CartItemForm: {data: CartItem};
};

type HomePageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
  route: RouteProp<RootStackParamList, 'HomePage'>;
};

type FirmDetailsPageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'FirmDetailsPage'>;
  route: RouteProp<RootStackParamList, 'FirmDetailsPage'>;
};

type BankDetailsPageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'BankDetailsPage'>;
  route: RouteProp<RootStackParamList, 'BankDetailsPage'>;
};

type CartItemProp = {
  navigation: StackNavigationProp<RootStackParamList, 'CartItemsPage'>;
  route: RouteProp<RootStackParamList, 'CartItemsPage'>;
};

type BayersPageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'BayersPage'>;
  route: RouteProp<RootStackParamList, 'BayersPage'>;
};

type FirmDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'FirmDataForm'>;
  route: RouteProp<RootStackParamList, 'FirmDataForm'>;
};
type BankDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'BankDataForm'>;
  route: RouteProp<RootStackParamList, 'BankDataForm'>;
};

type BayerDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'BayerDataForm'>;
  route: RouteProp<RootStackParamList, 'BayerDataForm'>;
};

type CartItemFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'CartItemForm'>;
  route: RouteProp<RootStackParamList, 'CartItemForm'>;
};

export {Stack};
export type {
  HomePageProp,
  FirmDataFormProp,
  FirmDetailsPageProp,
  BankDetailsPageProp,
  BankDataFormProp,
  BayersPageProp,
  BayerDataFormProp,
  CartItemProp,
  CartItemFormProp,
};

export const ThemeContext = React.createContext<{
  isDark: boolean;
  toggle: (newValue: boolean) => void;
}>({isDark: false, toggle: (a) => {}});
