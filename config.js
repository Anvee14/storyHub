import firebase from 'firebase'

require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBv4eMoHv-_NrF7zRr7BUZl9wzPNrw4jks",
    authDomain: "storyhub-a91bf.firebaseapp.com",
    databaseURL: "https://storyhub-a91bf.firebaseio.com",
    projectId: "storyhub-a91bf",
    storageBucket: "storyhub-a91bf.appspot.com",
    messagingSenderId: "548434568601",
    appId: "1:548434568601:web:50ca227c0ba5a6ff95df08"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()