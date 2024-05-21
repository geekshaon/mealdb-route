import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";

const Meal = () => {
  const meals = useLoaderData();
  // console.log(meals.meals);
  return (
    <div className="grid grid-cols-5 gap-4">
      {meals.meals.map((meal) => (
        <Card key={meal.id} meal={meal}></Card>
      ))}
    </div>
  );
};

export default Meal;
