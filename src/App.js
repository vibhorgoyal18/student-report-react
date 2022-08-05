import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let [counter, setCounter] = useState(0);

    let divStyle = {
        height: "100vh",
        paddingLeft: "50%",
        paddingTop: "20%",
    };

    const onButtonClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };
    return (
        <div style={divStyle}>
            <div style={{ fontSize: "20px" }}>
                The value of counter is {counter}
            </div>
            <button className="btn btn-primary" onClick={onButtonClick}>
                Increment
            </button>
        </div>
    );
}

export default App;
