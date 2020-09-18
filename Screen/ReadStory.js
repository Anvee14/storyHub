
import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';
export default class ReadStory extends React.Component{
    render(){
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Instagram</Text>
       </View>
  );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:'large',
    marginTop:10
  },
  buttonText: {
    fontWeight: 'bolder',
    fontSize: 'large',

  },
  inputBox: {
    width: 300,
    height: 30,
    marginTop: 10,
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 'large',
    borderWidth: 'medium',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'black',
    lineHeight: 230,
    marginLeft: 'center',
    marginRight: 'center',
    textAlign: 'center',
  },
  submitButton:{
    display: 'block',
    width: 150,
    backgroundcolor: 'lightblue',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 'thick',
    fontWeight: 'bold',
    fontSize: 'larger',
    marginLeft: 'center',
    marginRight: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    lineHeight:40,
    marginTop:30,
  },
  bookImage: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100
  }
});
