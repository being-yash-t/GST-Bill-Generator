// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

const {Navigation} = require('react-native-navigation');
const React = require('react');
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Homepage from './src/views/HomePage';
import SettingsPage from './src/views/SettingsPage';
import {initDb} from './src/services/SqliteHelper';
import BankDetailsPage from './src/views/BankDetailsPage';
import BayersPage from './src/views/BayersPage';
import CartItemsPage from './src/views/CartItemsPage';
import FirmDetailsPage from './src/views/FirmDetailsPage';
import NewBillPage from './src/views/NewBillPage';
import OldBillsPage from './src/views/OldBillPage';

Navigation.registerComponent('HomePage', () => gestureHandlerRootHOC(Homepage));
Navigation.registerComponent('SettingsPage', () =>
  gestureHandlerRootHOC(SettingsPage),
);
Navigation.registerComponent('BankDetailsPage', () =>
  gestureHandlerRootHOC(BankDetailsPage),
);
Navigation.registerComponent('BayersPage', () =>
  gestureHandlerRootHOC(BayersPage),
);
Navigation.registerComponent('CartItemsPage', () =>
  gestureHandlerRootHOC(CartItemsPage),
);
Navigation.registerComponent('FirmDetailsPage', () =>
  gestureHandlerRootHOC(FirmDetailsPage),
);
Navigation.registerComponent('NewBillPage', () =>
  gestureHandlerRootHOC(NewBillPage),
);
Navigation.registerComponent('OldBillsPage', () =>
  gestureHandlerRootHOC(OldBillsPage),
);

Navigation.events().registerAppLaunchedListener(async () => {
  initDb();
  Navigation.setDefaultOptions({
    statusBar: {style: 'dark', backgroundColor: 'white'},
    layout: {backgroundColor: 'white'},
    topBar: {
      title: {alignment: 'center', fontFamily: 'Montserrat-Bold'},
      animate: true,
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomePage',
              options: {topBar: {elevation: 0}},
            },
          },
        ],
      },
    },
  });
});
