import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCZvpF8bPzU3aM3KcEW7E3nCfZZTid6en4",
    authDomain: "notification-alert-app.firebaseapp.com",
    projectId: "notification-alert-app",
    storageBucket: "notification-alert-app.appspot.com",
    messagingSenderId: "609133814031",
    appId: "1:609133814031:web:e92f7b1ba05310a3de5e7a"
  };
    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()