import React from "react";
// import "@material-ui/core";
import "./TopBar.css";

const TopBar = () => (
    <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <span className="mdc-top-app-bar__title">Clicky Game</span>
            </section>
        </div>
    </header>
)

export default TopBar;