import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotMatch from "./Component/NotMatch";
import Display from "./Component/Display";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <Display />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
