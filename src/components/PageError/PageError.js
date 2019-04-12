import React from "react";
import "./PageError.css";

function PageError(props){
    return (
        <div className="PageError">
            <div className="alert alert-danger" role="alert">
            {props.error.message}
            </div>
        </div>
    );
}

export default PageError;