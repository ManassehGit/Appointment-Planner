import React from "react";

export const Tile = (props) => {
  let values = Object.values(props.object);

  return (
    <div className="tile-container">
      {values.map((item, index) => index === 0 ? <p className="tile-title" key={index}>{item}</p>: <p className="tile" key={index}>{item}</p>)}
    </div>
  );
};
