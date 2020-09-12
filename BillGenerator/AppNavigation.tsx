import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {FirmData} from './src/models/DataModels';

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
  FirmDataForm: {data: FirmData | null};
};

type HomePageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
  route: RouteProp<RootStackParamList, 'HomePage'>;
};

type FirmDetailsPageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'FirmDetailsPage'>;
  route: RouteProp<RootStackParamList, 'FirmDetailsPage'>;
};

type FirmDataFormProp = {
  navigation: StackNavigationProp<RootStackParamList, 'FirmDataForm'>;
  route: RouteProp<RootStackParamList, 'FirmDataForm'>;
};

export {Stack};
export type {HomePageProp, FirmDataFormProp, FirmDetailsPageProp};
