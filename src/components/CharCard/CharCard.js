import React from "react";
import "./CharCard.css";
// import { url } from "inspector";

const CharCard = ({ id, name, image }) => (
    <div className="card">
        <div
            className="img"
            key={id}
            style={{ backgroundImage: `url(${image})` }}
        >
        </div>
        <h3 className="name">{name}</h3>
    </div>
)

export default CharCard;
