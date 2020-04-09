import React from "react";

function GroceryListItem(props) {
    return (
        <div>
            <li>
                {props.item}
                <button className="deleteButton"
                    onClick={() => {
                        props.onChecked(props.id);
                    }}>
                    X
                </button>
            </li>
        </div>
    );
}

export default GroceryListItem;