import React from 'react';
import {HomePage} from './src/views/HomePage';
import {Navigation} from 'react-native-navigation';
import {Text} from 'react-native';

Navigation.registerComponent('Home', () => HomePage);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const App: React.FC = () => {
  return <Text>Heee</Text>;
};

export default App;
