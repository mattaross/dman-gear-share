import React from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";

import "../App.css";

const Grid = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="column guitar">
                    <h3 className="column__text">Guitars!</h3>
                </div>
                <div className="column bass">
                    <h3 className="column__text">Basses!</h3>
                </div>
                <div className="column drums">
                    <h3 className="column__text">Drums!</h3>
                </div>
                <div className="column keys">
                    <h3 className="column__text">Keys!</h3>
                </div>
            </div>
            <div className="row">
                <div className="column microphone">
                    <h3 className="column__text">Microphones!</h3>
                </div>
                <div className="column speaker">
                    <h3 className="column__text">Speakers!</h3>
                </div>
                <div className="column cable">
                    <h3 className="column__text">Cables!</h3>
                </div>
                <div className="column misc">
                    <h3 className="column__text">Miscellaneous!</h3>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Grid;
