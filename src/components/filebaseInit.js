
import firebase from 'firebase';
import 'firebase/firestore'
import filebaseConfig from './filebaseConfig'
const filebaseApp = firebase.initializeApp
(filebaseConfig)

export default firebase.firestore()