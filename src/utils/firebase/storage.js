import firebase from 'firebase/app'
import 'firebase/storage'

firebase.initializeApp({
	apiKey: 'AIzaSyCR2Ss9nbfkC6R0iUl4-Ns5Go_VHQOiMWA',
	authDomain: 'soyaendustriyel.firebaseapp.com',
	databaseURL: 'https://soyaendustriyel.firebaseio.com',
	projectId: 'soyaendustriyel',
	storageBucket: 'soyaendustriyel.appspot.com',
	messagingSenderId: '711075640032',
	appId: '1:711075640032:web:14ed1fcbc73f88b06bd685'
})

const storage = firebase.storage().ref()

export default storage
