import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.component";
import Form from "./components/form.component";
import {Report} from "./components/report.component";
import {useState} from "react";

function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Rajesh",
            course: "B.tech",
            sem: "V",
            maths: 42,
            english: 72,
            science: 31,
        },
        {
            id: 2,
            name: "Rohit",
            course: "BCA",
            sem: "V",
            maths: 47,
            english: 54,
            science: 76,
        },
    ])

    const addStudentFromForm = (student) => {
        setStudents([...students, student])
    }

    return (
        <>
            <Header/>
            <div className="container-fluid mt-4">
                <div className="row">
                    <Form addStudentFromForm ={addStudentFromForm}/>
                    <Report students={students}/>
                </div>
            </div>
        </>
    );
}

export default App;
