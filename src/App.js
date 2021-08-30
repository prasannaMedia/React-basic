import './App.css';
import Support from './components/support/Support'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from './components/support/Home/Home';
import About from './components/About/About';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
