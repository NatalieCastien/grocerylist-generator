import React, {useState} from "react";

function Button(props) {
    
const [count, setCount] = useState(0);
const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setCount(count + 1);
    console.log('clicked');    
  }  
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

      return (
        <button 
        style={{backgroundColor: isMouseOver ? "white" : "#0fab80", color: isMouseOver ? "#0fab80" : "white"}}
        id={props.identifier} 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >+ {count}</button>
      )
}

export default Button;
