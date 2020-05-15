import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCP_trX5q4lrqdl5gjIQG2yDuwp9pVL3kU",
    authDomain: "app-livros.firebaseapp.com",
    databaseURL: "https://app-livros.firebaseio.com",
    projectId: "app-livros",
    storageBucket: "app-livros.appspot.com",
    messagingSenderId: "881812370219",
    appId: "1:881812370219:web:c05d3f7d2d6978e0c60b6e"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();