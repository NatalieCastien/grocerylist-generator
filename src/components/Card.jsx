import React from "react";
import Image from "./Image";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Image cardimage={props.name} />
      </div>      
    </div>
  );
}

export default Card;