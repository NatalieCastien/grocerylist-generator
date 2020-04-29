import React, {useState} from "react";

function SubtractButton(props) {
    
const [isMouseOver, setMouseOver] = useState(false);
const buttonKey = "subtractButton" + props.id;
  
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
            props.onSubtract(props.name);
        }}
        key={buttonKey}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        count={props.count}     
        name={props.name}   
        >-</button>
      )
}

export default SubtractButton;
