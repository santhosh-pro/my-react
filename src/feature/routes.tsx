import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
        <Route exact={true} path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;