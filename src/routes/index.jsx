import { Route, Switch } from "react-router";
import GroupPage from "../pages/groupPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/groups">
        <GroupPage />
      </Route>
    </Switch>
  );
};
export default Routes;
