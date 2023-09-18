import React, { useState } from "react";
import "./block.css";

const AddMore = () => {
  const [blocksAdded, setBlocksAdded] = useState(0);

  const handleAddBlockClick = () => {
    if (blocksAdded < 2) {
      setBlocksAdded(blocksAdded + 1);
    }
  };

  return (
    <div>
      <div className="block-container">
        <div className="block">
          <h2>Block D</h2>
        </div>
      </div>
      {blocksAdded < 2 && <div>Block after 'd'</div>}
      <div className="block-container">
        <div className="block">
          <h2>Block E</h2>
        </div>
      </div>{" "}
      {blocksAdded < 2 && (
        <button onClick={handleAddBlockClick}>Add Block</button>
      )}
    </div>
  );
};

export default AddMore;
