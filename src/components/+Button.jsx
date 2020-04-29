import React, {useState} from "react";

function AddButton(props) {
    
const [isMouseOver, setMouseOver] = useState(false);
const buttonKey = "addButton" + props.id;
   
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

      return (
        <button className="listButton"
        style={{backgroundColor: isMouseOver ? "#0A8F83" : "transparent", color: isMouseOver ? "white" : "#0A8F83"}}
        id={props.identifier} 
        onClick={() => {
            props.onAdd(props.name);
        }}
        key={buttonKey}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        count={props.count}     
        name={props.name}   
        >+</button>
      )
}

export default AddButton;
