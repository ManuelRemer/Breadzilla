import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Generator from "./components/Generator/Generator";
import SingleRecipe from "./components/SingleRecipe/SingleRecipe";
import { getRecipesFromLocalStorage } from "./components/Generator/libGenerator";
import { useState } from "react";
import FloursContext from "./CustomHooks/FloursContext";
import useFlours from "./CustomHooks/useFlours";

function App() {
  const [savedRecipes, setSavedRecipes] = useState(
    getRecipesFromLocalStorage()
  );

  function handleSavedRecipes(newSavedRecipes) {
    setSavedRecipes(newSavedRecipes);
  }

  function handleDeleteRecipe(name, history) {
    if (window.confirm("Are you sure?")) {
      history.push("/");

      const indexToDelete = savedRecipes.findIndex(
        (recipeToDelete) => recipeToDelete.recipe.name === name
      );
      const cloneSavedRecipes = [...savedRecipes];
      cloneSavedRecipes.splice(indexToDelete, 1);
      localStorage.setItem("recipes", JSON.stringify(cloneSavedRecipes));

      handleSavedRecipes(cloneSavedRecipes);
    }
  }

  return (
    <FloursContext.Provider value={useFlours()}>
      <Router>
        <div className="App" id="App">
          <Switch>
            <Route exact path="/">
              <LandingPage savedRecipes={savedRecipes} />
            </Route>

            <Route exact path="/generator">
              <Generator onSaveUpdateSavedRecipes={handleSavedRecipes} />
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
    </FloursContext.Provider>
  );
}

export default App;
