import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Generator from "./components/Generator/Generator";
import { getRecipesFromLocalStorage } from "./components/Generator/libGenerator";
import { useState, useEffect } from "react";

function App() {
  const [savedRecipes, setSavedRecipesApp] = useState(
    getRecipesFromLocalStorage()
  );

  useEffect(() => console.log("changed"), [savedRecipes]);

  function handleSetSavedRecipes(x) {
    setSavedRecipesApp(x);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/generator">
            <Generator onSave={handleSetSavedRecipes} />
          </Route>

          <Route exact path="/recipe"></Route>

          <Route exact path="/saved-recipe"></Route>

          <Route exact path="/collection"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
