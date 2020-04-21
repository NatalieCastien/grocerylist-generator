import React from "react";
import {Card, Button} from 'react-bootstrap';
import { UncontrolledCollapse, CardBody } from 'reactstrap';
// import Button from "./Button";

function RecipeCard(props) {  

  function log(ingredient) {
    return (
      <p>{ingredient.productname} {ingredient.count}</p>     
    );
  }

  const recipeId = props.identifier;
  const togglerId = "toggler" + recipeId;
  const togglerHash = "#" + togglerId;
  

  return (
      <Card className="recipeCard"
        onClick={() => {
        props.onChecked(props.ingredients);
      }}>
        <div className="recipeCardImage">
          <img className="recipeImage" src={props.img} alt="Card image cap" />
        </div>
        <div>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          </div>
          <div>
          <Button className="togglebutton" id={togglerId}>
            <img className="toggleArrow" src="arrow-down.png" alt="arrow down" />
          </Button>

          <UncontrolledCollapse toggler={togglerHash}>              
                {props.ingredients.map(log)}                
            </UncontrolledCollapse>            
          {/* <Button>Button</Button> */}
        </div>
      </Card>
  );
}

export default RecipeCard;