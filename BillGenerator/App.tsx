import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Stack, ThemeContext} from './AppNavigation';
import Homepage from './src/views/HomePage';
import NewBillPage from './src/views/NewBillPage';
import SettingsPage from './src/views/SettingsPage';
import FirmDetailsPage from './src/views/FirmDetailsPage';
import BankDetailsPage from './src/views/BankDetailsPage';
import CartItemsPage from './src/views/CartItemsPage';
import OldBillsPage from './src/views/OldBillPage';
import BayersPage from './src/views/BayersPage';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import AddUpdateFirmDataPage from './src/views/AddUpdateFirmData';
import {StatusBar} from 'react-native';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const ptheme = isDarkTheme ? PaperDarkTheme : PaperDefaultTheme; // Use Light/Dark theme based on a state
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  function toggleTheme(newValue: boolean) {
    setIsDarkTheme(newValue);
  }

  return (
    <ThemeContext.Provider value={{isDark: isDarkTheme, toggle: toggleTheme}}>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.card}
      />
      <PaperProvider
        theme={{
          ...ptheme,
          roundness: 10,
          fonts: {
            ...ptheme.fonts,
            regular: {fontFamily: 'Montserrat-Regular'},
            medium: {fontFamily: 'Montserrat-Bold'},
          },
          colors: {
            ...ptheme.colors,
            primary: '#3498db',
            accent: '#3498db',
          },
        }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
                fontSize: 24,
              },
              headerTitleAlign: 'center',
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

            <Stack.Screen
              name="FirmDataForm"
              component={AddUpdateFirmDataPage}
              options={{
                title: 'Firm',
                cardStyleInterpolator:
                  CardStyleInterpolators.forModalPresentationIOS,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
