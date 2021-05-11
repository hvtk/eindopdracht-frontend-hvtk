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
import Profilepage from "./pages/profilepage/Profilepage";

function App() {
  return (
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
              <Route path="/signin">
                <SignIn/>
              </Route>
              <Route path="/signup">
                <SignUp/>
              </Route>
              <Route path="/profile">
                <Profilepage/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
