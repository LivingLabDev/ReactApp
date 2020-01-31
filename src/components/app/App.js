import React from "react";
import Login from "../login/Login";
import FormFarmerSow from "../form/FormFarmerSow";
import FormFarmer from "../form/FormFarmer";
import FormBaker from "../form/FormBaker";
import SwipeableRoutes from "react-swipeable-routes";
import Landing from "../landing/Landing";
import Sow from "../sow/Sow";
import Harvest from "../harvest/Harvest";
import Miller from "../miller/Miller";
import Bakery from "../bakery/Bakery";
import Baked from "../baked/Baked";
import Ending from "../ending/Ending";
import Error404 from "../error404/Error404";
import More from "../more/More";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Circle from "../circle/Circle";
import Blockchain from "../blockchain/Blockchain";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/farmer/sow" component={FormFarmerSow}/>
        <Route exact path="/farmer" component={FormFarmer}/>
        <Route exact path="/baker" component={FormBaker}/>
        <Route exact path="/more" component={More}/>
        <Route exact path="/blockchain" component={Blockchain}/>

        <SwipeableRoutes exact replace>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/sow" component={Sow}/>
          <Route exact path="/harvest" component={Harvest}/>
          <Route exact path="/miller" component={Miller}/>
          <Route exact path="/bakery" component={Bakery}/>
          <Route exact path="/baked" component={Baked}/>
          <Route exact path="/ending" component={Ending}/>
        </SwipeableRoutes>

        <Route component={Error404}/>
      </Switch>
      <Circle/>
    </BrowserRouter>
  );
}

export default App;
