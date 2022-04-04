import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.object.map((obj, index) => <Tile object={obj} key={index} />)}
    </div>
  );
};
