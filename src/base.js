import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCy6tPukbuGK0iMi7fnJp6EmGhcD0XMkyc",
    authDomain: "react-meat-market-31244.firebaseapp.com",
    databaseURL: "https://react-meat-market-31244-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;