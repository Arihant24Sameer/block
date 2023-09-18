import React, { useState } from "react";
import "./block.css";

const AddMore = () => {
  const [blocksAdded, setBlocksAdded] = useState(0);

  const handleAddBlockClick = () => {
    if (blocksAdded < 3) {
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
      {blocksAdded >= 1 && (
        <div className="block-container">
          <div className="block">
            <h2>Block E</h2>
          </div>
        </div>
      )}
      {blocksAdded >= 2 && (
        <div className="block-container">
          <div className="block">
            <h2>Block F</h2>
          </div>
        </div>
      )}
      {blocksAdded < 3 && blocksAdded < 2 && (
        <button onClick={handleAddBlockClick}>Add Block</button>
      )}
    </div>
  );
};

export default AddMore;
