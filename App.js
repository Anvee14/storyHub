import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './Screen/ReadStory'
import WriteStory from './Screen/WriteStory'

export default class TransactionScreen extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  ReadStory:{
    screen:ReadStory
  },
  WriteStory:{
    screen:WriteStory
  }
})
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
