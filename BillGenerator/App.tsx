import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './src/core/Navigation';
import {HomePage} from './src/views/HomePage';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
