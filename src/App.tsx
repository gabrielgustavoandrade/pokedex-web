import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemons from "./pages/pokemons";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pokemons" component={Pokemons} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
