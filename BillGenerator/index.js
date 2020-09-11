/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initDb} from './src/services/SqliteHelper';

initDb();

AppRegistry.registerComponent(appName, () => App);
