import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHpuAEzrFocRoLBUZedAi_CQ0nXrfBqkY",
    authDomain: "chat-app-4b7e6.firebaseapp.com",
    databaseURL: "https://chat-app-4b7e6.firebaseio.com",
    projectId: "chat-app-4b7e6",
    storageBucket: "chat-app-4b7e6.appspot.com",
    messagingSenderId: "985990696062"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);