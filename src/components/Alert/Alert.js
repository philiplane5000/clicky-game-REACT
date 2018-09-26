import React from "react";
import "./Alert.css";

const Alert = props => (
    <div className="default">
        {props.message}
    </div>
)

export default Alert;