import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Generator from "./components/Generator/Generator";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import { getRecipesFromLocalStorage } from "./components/Generator/libGenerator";
import { useState } from "react";

function App() {
  const [recipeClicked, setRecipeClicked] = useState();
  function handleRecipe() {
    setRecipeClicked();
  }

  const [savedRecipes, setSavedRecipesApp] = useState(
    getRecipesFromLocalStorage()
  );

  function handleSetSavedRecipes(x) {
    setSavedRecipesApp(x);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage savedRecipes={savedRecipes} onRecipe={handleRecipe} />
          </Route>

          <Route exact path="/generator">
            <Generator onSave={handleSetSavedRecipes} />
          </Route>

          <Route exact path="/SingleRecipe/:name">
            <SingleRecipe
              savedRecipes={savedRecipes}
              recipeClicked={recipeClicked}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
