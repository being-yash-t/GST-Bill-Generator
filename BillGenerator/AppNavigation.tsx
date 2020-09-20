import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {BankDetails, FirmData} from './src/models/DataModels';
import React from 'react';
import Animated from 'react-native-reanimated';

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

type FirmDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'FirmDataForm'>;
  route: RouteProp<RootStackParamList, 'FirmDataForm'>;
};
type BankDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'BankDataForm'>;
  route: RouteProp<RootStackParamList, 'BankDataForm'>;
};

export {Stack};
export type {
  HomePageProp,
  FirmDataFormProp,
  FirmDetailsPageProp,
  BankDetailsPageProp,
  BankDataFormProp,
};

export const ThemeContext = React.createContext<{
  isDark: boolean;
  toggle: (newValue: boolean) => void;
}>({isDark: false, toggle: (a) => {}});
