import React, {useState} from "react";

function GroceryInputField(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newItem = event.target.value;
        setInputText(newItem);
      };

    return (
    
    <div className="form">
        <input id="groceryItem" onChange={handleChange} type="text" value={inputText}/>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
            document.getElementById('groceryItem').focus();
            document.getElementById('groceryItem').select(); 
        }}>
          <span>Add</span>
        </button>
    </div> 
    )
}

export default GroceryInputField;

