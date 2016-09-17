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
      <StatusBar barStyle="default" />
      <StackNavigation initialRoute={Router.getRoute('IconSetList')} />
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
      </NavigationProvider>
  );
}

AppRegistry.registerComponent('IconExplorer', () => IconExplorer);
Exponent.registerRootComponent(IconExplorer);
