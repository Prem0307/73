import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 var firebaseConfig = {
  apiKey: "AIzaSyDMB79xR3ZPj8X-8LnjbwUsAlisoPwhWzw",
  authDomain: "pro73-ca4f3.firebaseapp.com",
  projectId: "pro73-ca4f3",
  storageBucket: "pro73-ca4f3.appspot.com",
  messagingSenderId: "235485568360",
  appId: "1:235485568360:web:ab664acd804ff8e49acadd"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

