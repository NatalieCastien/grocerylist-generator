import React, {useState} from "react";

function AddRecipeButton(props) {
    
const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

      return (
        <button className="recipeAddButton"
        style={{backgroundColor: isMouseOver ? "white" : "#0A8F83", color: isMouseOver ? "#0A8F83" : "white"}}
        id={props.identifier} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >+</button>
      )
}

export default AddRecipeButton;
