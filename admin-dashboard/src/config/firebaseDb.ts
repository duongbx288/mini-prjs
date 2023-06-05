import {
  DocumentData,
  WithFieldValue,
  addDoc,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const addDataWithId = async (
  data: WithFieldValue<DocumentData>,
  collection: string,
  documentId: string
) => {
  //
  await setDoc(doc(db, collection, documentId), data);
};

export const addData = async (data: unknown, collectionName: string) => {
  try {
    await addDoc(collection(db, collectionName), data).then((res) =>
      console.log(res)
    );
  } catch (error: unknown) {
    console.log(error);
  }
};

export const createNewUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { 
        console.log(userCredential);
        window.alert(`Add successfully`);
    })
    .catch((error) => {
      window.alert(`${error.code} : ${error.message}`);
    });
};
