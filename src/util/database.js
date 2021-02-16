import firebase from 'firebase'
import 'firebase/database'

const dbConfig = {
  apiKey: "AIzaSyAT9U0_xrxTsWpoMq5cam8_Jvix-C9PXf0",
  authDomain: "exa-be21.firebaseapp.com",
  databaseURL: "https://exa-be21-default-rtdb.firebaseio.com",
  projectId: "exa-be21",
  storageBucket: "exa-be21.appspot.com",
  messagingSenderId: "972251022581",
  appId: "1:972251022581:web:c71920c6afd98f187171bc"
}

firebase.initializeApp(dbConfig)

const sendResults = (res) => {
  firebase.database().ref('test/').push(res)  
}

export default { sendResults }