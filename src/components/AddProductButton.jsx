import React, {useState} from "react";

function AddProductButton(props) {
    
const [count, setCount] = useState(0);
const [isMouseOver, setMouseOver] = useState(false);

  // function handleClick() {
  //   if (count < 9) {
  //   setCount(count + 1);
  //   console.log('clicked');    
  //   }
  // }  
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

      return (
        <button className="addButton"
        style={{backgroundColor: isMouseOver ? "white" : "#0A8F83", color: isMouseOver ? "#0A8F83" : "white"}}
        id={props.identifier} 
        // onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >+</button>
      )
}

export default AddProductButton;
