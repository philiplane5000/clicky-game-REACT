import React from "react";
import "./MaterialGrid.css";

const MaterialGrid = props =>
    <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
            {props.children}
        </div>
    </div>

export default MaterialGrid;