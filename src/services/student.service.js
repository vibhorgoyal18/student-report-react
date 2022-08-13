import db from "../firebase";
import {addDoc, collection} from "firebase/firestore"


const addStudentToFirebase = async (student) => {
    await addDoc(collection(db, "student"), student)
}

export {addStudentToFirebase}
