import React, {useState} from "react";
import InputBox from "./input.component";
import {addStudentToFirebase} from "../services/student.service";

const Form = (props) => {
    let [student, setStudent] = useState({
        id: null,
        name: null,
        course: null,
        sem: null,
        english: null,
        maths: null,
        science: null,
    })
    const addStudent = (event) => {
        event.preventDefault();
        addStudentToFirebase(student);
        props.addStudentFromForm(student);
    }

    const handleInputChange = (event) => {
        setStudent(() => ({...student, [event.target.id]: event.target.value}));
    }
    return (
        <div className="col-3">
            <form onSubmit={addStudent}>
                <div className="form-group">
                    <div className="row">
                        <InputBox
                            id="id"
                            placeholder="ID"
                            type="number"
                            value={student.id}
                            handleInputChange={handleInputChange}
                        />
                        <InputBox
                            id="name"
                            placeholder="Name"
                            value={student.name}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <label htmlFor="course">Course:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="course"
                                placeholder="Course"
                                value={student.course ?? ""}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="sem">Semmester:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="sem"
                                placeholder="Semmester"
                                value={student.sem ?? ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <h6 className="mt-3 fw-bold">Marks:</h6>
                        <div className="col-4">
                            <label htmlFor="maths">
                                <small>Maths</small>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="maths"
                                placeholder="Maths"
                                value={student.maths ?? ""}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="english">
                                <small>English:</small>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="english"
                                placeholder="English"
                                value={student.english ?? ""}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="science">
                                <small>Science:</small>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="science"
                                placeholder="Science"
                                value={student.science ?? ""}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success mt-4 ps-5 pe-5">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
