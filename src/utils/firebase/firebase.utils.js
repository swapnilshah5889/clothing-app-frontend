import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Web app configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfwJiBfU97CBrXKMDzuOZBdm9u3s9t_ns",
    authDomain: "clothing-app-db-b2efe.firebaseapp.com",
    projectId: "clothing-app-db-b2efe",
    storageBucket: "clothing-app-db-b2efe.appspot.com",
    messagingSenderId: "610126194327",
    appId: "1:610126194327:web:ff8b8170fe03bd00ea2bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters(
    {prompt:"select_account"}
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // If user does not exists
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch (error) {
            console.log(error);
        }
    }
    
    return userDocRef;
    
};