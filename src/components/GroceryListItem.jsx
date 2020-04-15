import React from "react";
import ListButton from "./ListButton";

function GroceryListItem(props) {
    return (
        <div>
            <li>
                {props.item}
                <span style={{marginLeft: "20px"}}>{props.count}</span>
                <ListButton
                    identifier={props.key}
                    name={props.item}
                    count={props.count}
                />
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