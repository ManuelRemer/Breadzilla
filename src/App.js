import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Generator from "./components/Generator/Generator";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/generator">
            <Generator />
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
