import { DocumentData, WithFieldValue, doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export const addData = async (value: WithFieldValue<DocumentData>, collection: string, document: string) => {
    await setDoc(doc(db, collection, document), value);
}