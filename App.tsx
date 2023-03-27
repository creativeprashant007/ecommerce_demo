/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/AppNavigator';
import MainContainer from './src/MainContainer';
import appStore from './src/redux/store/store';
function App(): JSX.Element {
  return (
    <Provider store={appStore}>
      <MainContainer />
    </Provider>
  );
}

export default App;
