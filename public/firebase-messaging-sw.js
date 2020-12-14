importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

//  import firebase from "firebase"
 const firebaseConfig = {
     apiKey: "AIzaSyAnN4z6OUOFrE-5wVkwaZqKW0rK4aDDZh0",
     authDomain: "notification-message-41914.firebaseapp.com",
     projectId: "notification-message-41914",
     storageBucket: "notification-message-41914.appspot.com",
     messagingSenderId: "533161511694",
     appId: "1:533161511694:web:797a80d769021a64bfa55f",
     measurementId: "G-KN3LN04035"
   };
 firebase.initializeApp(firebaseConfig);
 firebase.messaging()