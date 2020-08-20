import React from "react";
import BrowsePreview from "./components/BrowsePreview";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";

import "./App.css";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            <hr />
            <Welcome />
            <BrowsePreview />
        </React.Fragment>
    );
};

export default App;
