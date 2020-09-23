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
  Appbar,
} from 'react-native-paper';
import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import FirmDataForm from './src/views/FirmDataForm';
import {StatusBar} from 'react-native';
import BankDataForm from './src/views/BankDataForm';
import BayerDataForm from './src/views/BayerDataFrom';

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
            primary: '#03A9F4',
            accent: '#03A9F4',
          },
        }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              header: (props) => (
                <Appbar.Header
                  style={{
                    backgroundColor: theme.colors.card,
                  }}>
                  {props.previous && (
                    <Appbar.BackAction onPress={props.navigation.goBack} />
                  )}
                  <Appbar.Content
                    title={props.scene.descriptor.options.title}
                  />
                </Appbar.Header>
              ),
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
              component={FirmDataForm}
              options={{
                title: 'Firm',
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
            />
            <Stack.Screen
              name="BankDataForm"
              component={BankDataForm}
              options={{
                title: 'Bank Details',
                headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
            />
            <Stack.Screen
              name="BayerDataForm"
              component={BayerDataForm}
              options={{
                title: 'Bayers Details',
                headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
