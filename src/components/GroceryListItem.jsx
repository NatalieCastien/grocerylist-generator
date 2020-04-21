import React from "react";
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";


function GroceryListItem(props) {
    const listbuttonKey = "button" + props.id;

    if (props.item !== "") {    
        var product = props.item;
        var productUppercase = product.charAt(0).toUpperCase() + product.slice(1);
        return (
            <div>
                <li>
                    <div>
                    {productUppercase}
                    </div>
                    
                    <div>
                            <span>
                                <SubtractButton                        
                                    identifier={"subtract" + props.id}
                                    key={"subtract" + listbuttonKey}
                                    name={props.item}
                                    count={props.count}
                                    onSubtract={props.onSubtract}
                                />
                            </span>
                            
                            <span style={{marginLeft: "8px"}}>{props.count}</span>

                            <span>
                                <AddButton                        
                                    identifier={"add" + props.id}
                                    key={"add" + listbuttonKey}
                                    name={props.item}
                                    count={props.count}
                                    onAdd={props.onAdd}
                                />
                            </span>
                            <span>
                                <button className="deleteButton"
                                    onClick={() => {
                                        props.onChecked(props.id);
                                    }}>
                                    X
                                </button>
                            </span>
                        </div>
                </li>
            </div>
        );
    } else return (
        <div></div>  
    );
}

export default GroceryListItem;