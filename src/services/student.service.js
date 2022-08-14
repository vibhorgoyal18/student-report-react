import db from "../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore"


const addStudentToFirebase = async (student) => {
    try {
        await addDoc(collection(db, "student"), student)
    } catch (error) {
        console.log("Error in adding user to firebase")
    }
}

const getStudentsFromFirebase = async () => {
    const documents = await getDocs(collection(db, "student"))
    const students = documents.docs.map(doc => doc.data());
    console.log(students);
    return students;
}

export {addStudentToFirebase, getStudentsFromFirebase}
