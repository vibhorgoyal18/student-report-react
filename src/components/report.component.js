import React from "react";
import ReportCard from "./reportCard.component";

export function Report(props) {
    const test = () => "";
    return (
        <div className="col-9">
            <div style={{ width: "200px" }} className="mt-2">
                <select
                    className="form-select"
                    name="filter"
                    id="filter"
                    onChange={test}
                >
                    <option value="all">All</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                </select>
            </div>
            <div className="row mt-4">
                <ReportCard studentInfo={props.students[0]}></ReportCard>
                <ReportCard
                    id={2}
                    name="Rohit"
                    course="B.tech"
                    sem="V"
                    maths={23}
                    english={76}
                    science={82}
                ></ReportCard>
            </div>
        </div>
    );
}