import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/generator"></Route>
          <Route exact path="/recipe"></Route>
          <Route exact path="/saved-recipe"></Route>
          <Route exact path="/collection"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
