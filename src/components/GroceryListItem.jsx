import React from "react";
import ListButton from "./ListButton";


function GroceryListItem(props) {
    if (props.item !== "") {    
        var product = props.item;
        var productUppercase = product.charAt(0).toUpperCase() + product.slice(1);
        return (
            <div>
                <li>
                    {productUppercase}
                    <span style={{marginLeft: "10px"}}>{props.count}</span>
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
    } else return (
        <div></div>  
    );
}

export default GroceryListItem;