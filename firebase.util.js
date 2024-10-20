import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqqBrm2GTozfk_6vhWaGD5fzGmAW6SJJ8",
  authDomain: "foodforall-872c7.firebaseapp.com",
  projectId: "foodforall-872c7",
  storageBucket: "foodforall-872c7.appspot.com",
  messagingSenderId: "554305485024",
  appId: "1:554305485024:web:cc7b8128cee7739fe43885"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const USER_TYPES = {
  CUSTOMER: "customer",
  FARMER: "farmer",
};

export const createUserDocument = async ({
  email,
  username,
  password,
  usertype,
  bio,
}) => {
  const userDocRef = doc(db, "users", email);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        email,
        username,
        password,
        usertype,
        bio,
        createdAt,
      });
    } catch (error) {
      throw "There is an error adding user " + error.message;
    }
  } else throw "User name already exists";

  return userDocRef;
};

export const authenticateUser = async ({ email, password }) => {
  const userDocRef = doc(db, "users", email);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    if (userData.password === password) {
      return userData;
    } else throw "Invalid credentials";
  } else throw "User does not exists";
};

export const getUser = async (email) => {
  const userDocRef = doc(db, "users", email);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    return userData;
  } else throw "User does not exists";
};