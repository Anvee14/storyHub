import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Header} from 'react-native-elements'
import ReadStory from './Screen/ReadStory'
import WriteStory from './Screen/WriteStory'

export default class Story extends React.Component{
  render(){
  return (
    <View style={styles.container}>
       <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'StoryHub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      <Text></Text>
      <AppContainer/>
    </View>
  );
  }
}
const TabNavigator = createBottomTabNavigator(
  {
  ReadStory:{screen:ReadStory },
  WriteStory:{screen:WriteStory}
  },
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if (routeName === "ReadStory") {
        return (
          <Image
            source={require("./assets/read.png")}
            style={{ width: 90, height: 90 }}
          />
        )

      }
      else if (routeName === "WriteStory") {
        return (
          <Image
            source={require("./assets/write.png")}
            style={{ width: 90, height: 90}}
          />)

      }
    }
  })
}
)
const AppContainer = createAppContainer(TabNavigator);


  const styles = StyleSheet.create({
    container: {
      flex: 0.90,
      backgroundColor: 'grey',
      alignItems: 'justify',
      justifyContent: 'center',
  
    },

  });
  
