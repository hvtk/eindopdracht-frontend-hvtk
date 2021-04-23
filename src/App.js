import React from "react";

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import AfterSearchQuery from "./pages/afterSearchQuery/AfterSearchQuery";
import SelectionAdults from "./pages/selectionAdults/SelectionAdults";
import SelectionChildren from "./pages/selectionChildren/SelectionChildren";
import SelectionElderly from "./pages/selectionElderly/SelectionElderly";
import SelectionYouth from "./pages/selectionYouth/SelectionYouth";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
      //<div>
     //       Dit zijn de eerste tekens van mijn applicatie voor de eindopdracht onderdeel: frontend!
    //  </div>
      <Router>
          <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route path="/search">
                <AfterSearchQuery/>
              </Route>
              <Route path="/adults">
                <SelectionAdults/>
              </Route>
              <Route path="/children">
                <SelectionChildren/>
              </Route>
              <Route path="/elderly">
                <SelectionElderly/>
              </Route>
              <Route path="/youth">
                <SelectionYouth/>
              </Route>
              <Route path="/signIn">
                <SignIn/>
              </Route>
              <Route path="/signup">
                <SignUp/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
