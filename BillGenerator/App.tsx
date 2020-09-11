import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './AppNavigation';
import Homepage from './src/views/HomePage';
import NewBillPage from './src/views/NewBillPage';
import SettingsPage from './src/views/SettingsPage';
import FirmDetailsPage from './src/views/FirmDetailsPage';
import BankDetailsPage from './src/views/BankDetailsPage';
import CartItemsPage from './src/views/CartItemsPage';
import OldBillsPage from './src/views/OldBillPage';
import BayersPage from './src/views/BayersPage';
import {
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationTypeForReplace: 'push',
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{
            title: 'GST Bill Generator',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 36,
              fontFamily: 'Montserrat-Bold',
            },
            headerStatusBarHeight: 40,
          }}
        />
        <Stack.Screen
          name="NewBillPage"
          component={NewBillPage}
          options={{title: 'New Bill'}}
        />
        <Stack.Screen
          name="SettingsPage"
          component={SettingsPage}
          options={{title: 'Settings'}}
        />
        <Stack.Screen
          name="FirmDetailsPage"
          component={FirmDetailsPage}
          options={{title: 'Firm Details'}}
        />
        <Stack.Screen
          name="BankDetailsPage"
          component={BankDetailsPage}
          options={{title: 'Bank Details'}}
        />
        <Stack.Screen
          name="CartItemsPage"
          component={CartItemsPage}
          options={{title: 'Cart Items'}}
        />
        <Stack.Screen
          name="OldBillsPage"
          component={OldBillsPage}
          options={{title: 'Old Bills'}}
        />
        <Stack.Screen
          name="BayersPage"
          component={BayersPage}
          options={{title: 'Bayers'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
