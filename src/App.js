import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.component";
import Form from "./components/form.component";
import {Report} from "./components/report.component";
import {useEffect, useState} from "react";
import {getStudentsFromFirebase} from "./services/student.service";

function App() {
    const [students, setStudents] = useState([])
    const [isUpdateRequired, setUpdateRequired] = useState(true);

    const addStudentFromForm = (student) => {
        setStudents([...students, student])
    }
    useEffect(() => {
        if(isUpdateRequired)
        getStudentsFromFirebase()
            .then(students => setStudents(students))
        setUpdateRequired(false);
    }, [isUpdateRequired])



    return (
        <>
            <Header/>
            <div className="container-fluid mt-4">
                <div className="row">
                    <Form addStudentFromForm ={addStudentFromForm} setUpdateRequired={setUpdateRequired}/>
                    <Report students={students}/>
                </div>
            </div>
        </>
    );
}

export default App;
