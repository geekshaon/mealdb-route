//import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealInfo = useLoaderData();
  const meal = mealInfo.meals[0];
  console.log(mealInfo.meals[0]);
  return (
    <div className="container place-content-center mx-auto grid grid-cols-2 mt-10">
      <div className="imag flex justify-center ">
        <img className="w-96 h-96 rounded-lg" src={meal.strMealThumb} alt="" />
      </div>
      <div className="div pr-5">
        <h2 className="text-3xl font-bold bottom-2">{meal.strMeal}</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;
