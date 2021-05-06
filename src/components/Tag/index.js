import React from "react";
import "./styles.css";
const Tag = props => (
    <button className="tag">
        {props.children}
    </button>
);
export { Tag };