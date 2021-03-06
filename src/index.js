import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
