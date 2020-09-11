import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

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
  //   OldData: {latestDate: Date};
};

type HomePageProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomePage'>;
  route: RouteProp<RootStackParamList, 'HomePage'>;
};

export {Stack};
export type {HomePageProp};
