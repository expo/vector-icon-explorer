import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  NavigatorIOS,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';


import IconSetList from './IconSetList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import Router from './Router';

export default function IconExplorer(props) {
  return (
    <NavigationProvider router={Router}>
      <StackNavigation
        initialRoute={Router.getRoute('IconExplorer')}
        defaultRouteConfig={{
          navigationBar: {
            backgroundColor: '#000',
            tintColor: '#fff',
            title: 'Vampire Clown',
          }
        }}
      />
      {/*
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'IconExplorer',
          component: IconSetList,
        }}
        itemWrapperStyle={styles.itemWrapper}
      >
      */}
        <StatusBar barStyle="default" />
      </NavigationProvider>
  );
}

AppRegistry.registerComponent('IconExplorer', () => IconExplorer);
Exponent.registerRootComponent(IconExplorer);
