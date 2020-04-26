import React from "react";
import {Card, Button, Row, Col} from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';
import AddRecipeButton from "./AddRecipeButton";

function RecipeCard(props) {  

  function showIngredients(ingredient) {
    return (
      <div>
        <Row>
          <Col className="col-10" style={{textAlign: "left"}}>
            <p>{ingredient.productname}</p>
          </Col>
          <Col className="col-2">
            <p>{ingredient.count}</p>
          </Col>
        </Row>
      </div>     
    );
  }

  const recipeId = props.identifier;
  const togglerId = "toggler" + recipeId;
  const togglerHash = "#" + togglerId;
  const image = "images/" + props.img;
  const arrowdown = "images/arrow-down.png";

  return (
      <Card className="recipeCard">
        <div className="recipeCardImage">
          <img className="recipeImage" src={image} alt="Card image cap" />
        </div>

        <div className="" 
             onClick={() => {
               props.onChecked(props.ingredients);
             }}>
             <AddRecipeButton            
               identifier={props.recipeId}
               name={props.name}
             />      
        </div>

        <div className="recipeNameBox">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          </div>
          <div>      
          <Button className="togglebutton" id={togglerId}>
            <img className="toggleArrow" src={arrowdown} alt="arrow down" />
          </Button>

          <UncontrolledCollapse toggler={togglerHash}>              
                {props.ingredients.map(showIngredients)}                
            </UncontrolledCollapse>            
          
        </div>
      </Card>
  );
}

export default RecipeCard;