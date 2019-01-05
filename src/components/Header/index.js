import React from "react";
import ScoreCard from "../ScoreCard";

import './style.css'

const Header = (props) => (
    <div className="header">
        <h1>{props.title}</h1>
        <ScoreCard score={props.score} />
    </div>
)

export default Header;

