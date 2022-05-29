import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCfYVDGoIR3-fU4yQrguq7d1EyDJgv9BxE", // Add API Key
  databaseURL:"https://livechatdatabase-default-rtdb.asia-southeast1.firebasedatabase.app" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
