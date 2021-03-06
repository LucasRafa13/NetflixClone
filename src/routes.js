import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" exact component={Home} />
         </Switch>
      </BrowserRouter>
   );
};

export default Routes;
