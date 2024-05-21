import "./App.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const meals = useLoaderData();
  console.log(meals);
  return (
    <>
      <Header></Header>
      <div>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
