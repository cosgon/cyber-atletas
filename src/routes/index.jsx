import { Route, Switch } from "react-router";
import ShowHabits from "../components/ShowHabits";
import Dashboard from "../pages/dashboard";
import GroupPage from "../pages/groupPage";
import PageHome from "../pages/pageHome";
import PageLogin from "../pages/pageLogin";
import PageRegister from "../pages/pageRegister";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route path="/PageLogin">
        <PageLogin />
      </Route>
      <Route path="/PageRegister">
        <PageRegister />
      </Route>
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
