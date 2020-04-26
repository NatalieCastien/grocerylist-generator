import React from "react";

function AlertNote(props) {    
    return (
        <div>
            <p className="alertnote">Are you sure you want to print your grocerylist? After this you cannot edit the grocerylist any more.</p>
            <button className="cancelButton" onClick={props.cancel}>Cancel</button>
            <button className="okButton" onClick={props.accept}>Ok</button>
        </div>
    )
}

export default AlertNote;