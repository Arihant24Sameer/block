import React  from "react";
import "./block.css";

const BlockB = ({ item }) => {
  return (
    <div className="block-container">
      <div className="block">
        <h2>Block B</h2>
        {item && <div>{item}</div>}
      </div>
    </div>
  );
};

export default BlockB;
