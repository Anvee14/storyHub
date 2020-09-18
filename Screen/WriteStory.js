import { StatusBar } from 'expo-status-bar';
import React from 'react';
import db from '../config.js'
import firebase, { database } from 'firebase'
import { StyleSheet, Text, View, Button,TouchableOpacity,Image,TextInput} from 'react-native';
import config from '../config';
export default class WriteStory extends React.Component{
  submitStory(){
    database.ref('/').update({
     story:this.state.story
    })

  }
  constructor(){
    super();
    this.state = {
     title: '',
     author:'',
     story:''
    };
  }
    render(){
  return (
    <View style={styles.container}>
       <Text style={styles.text}></Text>
       <TextInput
          style={styles.inputBox}
          placeholder="Title"
          placeholderTextColor = "black"
          onChangeText={text => {
            this.setState({ title: text });
          }}
          value={this.state.title}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Author Name"
          placeholderTextColor = "black"
          onChangeText={text => {
            this.setState({ author: text });
          }}
          value={this.state.author}
        />
        <TextInput
          style={styles.storyBox}
          placeholder="Story"
          placeholderTextColor = "black"
          multiline='true'
          onChangeText={text => {
            this.setState({ story: text });
          }}
          value={this.state.story}
        />
        <TouchableOpacity
        style={styles.submitButton}
        onPress={this.submitStory}
        >
        <Text style={styles.buttonText}>Submit</Text>

        </TouchableOpacity>
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
    fontSize:'large'
  },
  buttonText: {
    fontWeight: 'bolder',
    fontSize: 'large',

  },
  inputBox: {
    width: 200,
    height: 30,
    marginTop: 15,
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 'large',
    borderWidth: 'medium',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'black',
    marginLeft: 'center',
    marginRight: 'center',
    textAlign: 'center',
    fontStyle:'italic',
  },
  storyBox: {
    width: 300,
    height: 350,
    marginTop: 10,
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 'large',
    borderWidth: 'medium',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'black',
    marginLeft: 'center',
    marginRight: 'center',
    textAlign: 'center',
    fontStyle:'italic'
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
