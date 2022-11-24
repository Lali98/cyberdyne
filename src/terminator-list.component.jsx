import React from "react";

import Terminator from "./terminator.component";

const TerminatorList = ({ models }) => {
  
  return (
    <div>
      {models.map((model) => {
        return (
          <Terminator
            key={model.id}
            id={model.id}
            name={model.name}
            serialNumber={model.phone}
          />
        );
      })}
    </div>
  );
};

export default TerminatorList;
