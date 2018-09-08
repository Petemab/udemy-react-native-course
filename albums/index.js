// import a library to help create a component //
import React from 'react';

import { AppRegistry} from 'react-native';

import Header from './src/components/Header';

// create a component
const App = () => (
  <Header headerText={'Albums'}/>
);





// render component to the device //
AppRegistry.registerComponent('albums', () => App);
