import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./BottomNavMDC.css"

const BottomNavMDC = props => (
    <BottomNavigation {...props}>
        {props.children}
    </BottomNavigation>
)

export default BottomNavMDC;