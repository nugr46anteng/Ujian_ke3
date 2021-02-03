import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page_Radio from "./Page_Radio";
import Page_Checkbox from "./Page_Checkbox";
import Page_Essay from "./Page_Essay";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/radio">
            <Page_radio />
          </Route>
          <Route path="/cekbox">
            <Page_cekbox />
          </Route>
          <Route path="/essay">
            <Page_essay />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
