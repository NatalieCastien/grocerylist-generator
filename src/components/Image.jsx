import React from "react";

function Image(props) {
  return (
    <img className="circle-img" src={`https://www.themealdb.com/images/ingredients/${props.cardimage}.png`} alt="avatar_img" />      
  );
}

export default Image;
