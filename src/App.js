import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Generator from "./components/Generator/Generator";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import { getRecipesFromLocalStorage } from "./components/Generator/libGenerator";
import { useState } from "react";

function App() {
  const [savedRecipes, setSavedRecipes] = useState(
    getRecipesFromLocalStorage()
  );

  function handleDeleteRecipe(name, history) {
    if (window.confirm("Are you sure?")) {
      history.push("/");

      const indexToDelete = savedRecipes.findIndex(
        (recipeToDelete) => recipeToDelete.recipe.name === name
      );

      savedRecipes.splice(indexToDelete);
      localStorage.setItem("recipes", JSON.stringify(savedRecipes));

      setSavedRecipes(savedRecipes);
    }
  }

  function handleSetSavedRecipes(x) {
    setSavedRecipes(x);
  }

  return (
    <Router>
      <div className="App" id="App">
        <Switch>
          <Route exact path="/">
            <LandingPage savedRecipes={savedRecipes} />
          </Route>

          <Route exact path="/generator">
            <Generator onSave={handleSetSavedRecipes} />
          </Route>

          <Route exact path="/recipes/:name">
            <SingleRecipe
              savedRecipes={savedRecipes}
              onDelete={handleDeleteRecipe}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
