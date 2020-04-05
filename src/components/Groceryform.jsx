import React, {useState} from "react";

function Groceryform() {

    const [name, setName] = useState("");
    const [grocerylistName, setGrocerylistName] = useState("Name grocerylist");
    const [list, setList] = useState([]);
    const [inputText, setInput] = useState("");
    const [showHeader, setShowHeader] = useState("none");
    const [showHeaderForm, setShowHeaderForm] = useState("inline-block");
    const [showList, setShowList] = useState("none");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        setGrocerylistName(name);
        setShowHeader("inline");
        setShowHeaderForm("none");
        setShowList("inline");
        event.preventDefault();
    }

    function handleChange2(event) {
        const item = event.target.value;
        setInput(item);
      };
    
      function onSubmit(event) {
        setList(prevItems => {
          return [inputText, ...prevItems] ;     
        });
        setInput("");
        document.getElementById('groceryItem').focus();
        document.getElementById('groceryItem').select();
        event.preventDefault();
      }

    return (
    <div className="container groceryNote">
    <div className="grocerylistheading" style={{display: showHeader}}>
        <h1>{grocerylistName}</h1>
    </div>

    <form className="form" onSubmit={handleSubmit} style={{display: showHeaderForm}}>
        <input 
            type="text"
            placeholder="the name of your grocerylist"
            onChange={handleChange}
            value={name}
        />
        <button type="submit">Save</button>
    </form>

    <form className="form" onSubmit={onSubmit} style={{display: showList}}>
        <input id="groceryItem" onChange={handleChange2} type="text" value={inputText}/>
        <button>
          <span>Add</span>
        </button>
    </form>      
      <div>
        <ul>
          {list.map(listItem => <li>{listItem}</li>)}          
        </ul>
      </div> 
      </div>   
    );
}

export default Groceryform;