import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyACLsgJtw4XmtcjLjCJnm41anuYZsgj0DM",
  authDomain: "consumesafefirebase.firebaseapp.com",
  projectId: "consumesafefirebase",
  databaseURL: "https://consumesafefirebase.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope('email');
googleAuthProvider.addScope('profile');
