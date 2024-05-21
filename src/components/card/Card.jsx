import React from "react";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  console.log(meal);
  return (
    <div>
      <img className="rounded-xl" src={meal.strMealThumb} alt="" />
      <Link to={`/meal/${meal.idMeal}`}>
        <h2 className="text-center font-bold">{meal.strMeal}</h2>
      </Link>
    </div>
  );
};

export default Card;
