import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
//   OldData: {latestDate: Date};
};

type HomePageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const Stack = createStackNavigator<RootStackParamList>();

export {Stack};
export type {
  RootStackParamList,
  HomePageProps,
};
