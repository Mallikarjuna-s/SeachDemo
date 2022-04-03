import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

// import Uisamples from './Src/Uisamples.js';
import screen from "./Src/Uisamples.js/sreen";
// import HomeScreen from './demo';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(screen);
