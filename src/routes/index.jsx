import { Route, Switch } from "react-router";
import ShowHabits from "../components/ShowHabits";
import Dashboard from "../pages/dashboard";
import GroupPage from "../pages/groupPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/habits">
        <ShowHabits />
      </Route>
      <Route exact path="/"></Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>

      <Route>
        <GroupPage path="/Groups" />
      </Route>
    </Switch>
  );
};

export default Routes;
