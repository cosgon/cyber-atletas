import PageRegister from "../pages/pageRegister";
import { Route, Switch } from "react-router";
import Dashboard from "../pages/dashboard";
import GroupPage from "../pages/groupPage";
import PageLogin from "../pages/pageLogin";
import PageHome from "../pages/pageHome";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route exact path="/PageLogin">
        <PageLogin />
      </Route>
      <Route exact path="/PageRegister">
        <PageRegister />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/Groups">
        <GroupPage />
      </Route>
      <Route exact path="/Groups">
        <GroupPage />
      </Route>
      <Route exact path="/Group">
        <GroupPage />
      </Route>
    </Switch>
  );
};

export default Routes;
