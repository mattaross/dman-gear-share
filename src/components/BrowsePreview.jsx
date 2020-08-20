import React from "react";
import Grid from "./Grid";

import "../App.css";

const BrowsePreview = () => {
    return (
        <div className="browse-preview">
            <h1 className="browse-preview__heading">Browse gear:</h1>
            <a className="view-all-link" href="/">
                View all &rarr;
            </a>
            <Grid />
        </div>
    );
};

export default BrowsePreview;
