import { Route, Switch } from "react-router";
import Dashboard from "../pages/dashboard";
import GroupPage from "../pages/groupPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <GroupPage exact path="/Groups" />
      </Route>
    </Switch>
  );
};

export default Routes;
