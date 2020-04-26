import React, {useState} from "react";

function AddProductButton(props) {
    
const [isMouseOver, setMouseOver] = useState(false);

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
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >+</button>
      )
}

export default AddProductButton;
