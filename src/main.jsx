import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Meal from "./components/meals/Meal.jsx";
import MealDetails from "./components/mealDetails/MealDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "meals",
        element: <Meal></Meal>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
