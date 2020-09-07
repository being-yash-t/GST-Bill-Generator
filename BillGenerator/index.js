// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

const {Navigation} = require('react-native-navigation');
const React = require('react');
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import HomePage from './src/views/HomePage';
import SettingsPage from './src/views/SettingsPage';
import {initDb} from './src/services/SqliteHelper';

Navigation.registerComponent('Home', () => gestureHandlerRootHOC(HomePage));
Navigation.registerComponent('Settings', () =>
  gestureHandlerRootHOC(SettingsPage),
);

Navigation.events().registerAppLaunchedListener(async () => {
  initDb();
  Navigation.setDefaultOptions({
    statusBar: {style: 'dark', backgroundColor: 'white'},
    layout: {backgroundColor: 'white'},
    topBar: {title: {alignment: 'center'}, animate: false},
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {topBar: {elevation: 0}},
            },
          },
        ],
      },
    },
  });
});
