import React from "react";
import {Card, UncontrolledCollapse, Button} from 'react-bootstrap';
// import Button from "./Button";

function RecipeCard(props) {  

  function log(ingredient) {
    return (
      <p>{ingredient.productname} {ingredient.count}</p>     
    );
  }

  

  return (
      <Card className="recipeCard">
        <div className="recipeCardImage">
          <img className="recipeImage" src={props.img} alt="Card image cap" />
        </div>
        <div>
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          </div>
          <div>
          <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
            Toggle
          </Button>

          <UncontrolledCollapse toggler="#toggler">
              <Card>
                <div>
                {props.ingredients.map(log)}
                </div>
              </Card>
            </UncontrolledCollapse>            
          {/* <Button>Button</Button> */}
        </div>
      </Card>
  );
}

export default RecipeCard;