import React, {useState} from "react";

function GroceryInputField(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newItem = event.target.value;
        setInputText(newItem);
      };

    function handleClick() {
      props.onAdd(inputText);
      setInputText("");
      document.getElementById('groceryItem').focus();
      document.getElementById('groceryItem').select(); 
    }

    function handleKeyPress(event) {
      if (event.key === "Enter") {
        handleClick();
      }
    }

    return (
    
    <div className="form"  onKeyPress={handleKeyPress}>
        <input placeholder="Add a product manually" id="groceryItem" onChange={handleChange} type="text" value={inputText}/>
        <button className="squareButton" onClick={handleClick}>
          <span>Add</span>
        </button>
    </div> 
    )
}

export default GroceryInputField;

