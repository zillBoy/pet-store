import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyB_mn9V4yq734bAURzZU-r9TQ6QFuv5Lfw",
    authDomain: "petstore-d6270.firebaseapp.com",
    projectId: "petstore-d6270",
    storageBucket: "petstore-d6270.appspot.com",
    messagingSenderId: "422948247970",
    appId: "1:422948247970:web:82143136e75b1bee70bafb"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
export default firebase