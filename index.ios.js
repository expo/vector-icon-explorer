import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import IconSetList from './IconSetList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function IconExplorer(props) {
  return (
    <View>
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'IconExplorer',
          component: IconSetList,
        }}
        itemWrapperStyle={styles.itemWrapper}
      />
      <StatusBar barStyle="default" />
    </View>
  );
}

AppRegistry.registerComponent('IconExplorer', () => IconExplorer);
Exponent.registerRootComponent(IconExplorer);
