import {AppRegistry} from 'react-native';
import View from './src/pages/pokemonList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => View);
