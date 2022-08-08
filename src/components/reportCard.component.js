import React from "react";

export default function ReportCard(props) {
    const student = props.studentInfo;
    console.log(student?.maths);
    const total = student?.maths + student?.english + student?.science;
    console.log(total);
    const passOrFail =
        student?.maths > 33 && student?.english > 33 && student?.science > 33
            ? "Pass"
            : "Fail";
    return (
        <div className="col-6">
            <div
                className="card"
                style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "15px",
                        fontWeight: "600",
                        color: "red",
                    }}
                >
                    En No: {student?.id}
                </span>
                <span
                    style={{
                        position: "absolute",

                        top: "5px",
                        left: "10px",
                        fontWeight: "600",
                        color: passOrFail === "Pass" ? "green" : "red",
                    }}
                >
                    {passOrFail}
                </span>
                <div
                    style={{
                        width: "100%",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {student?.name}
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Maths</td>
                                <td>{student?.maths}</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>{student?.english}</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>{student?.science}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-6 ps-3 fw-bold">Total</div>
                        <div className="col-6" style={{ paddingLeft: "26px" }}>
                            {total}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
