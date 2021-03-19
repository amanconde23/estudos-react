import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Painel from './pages/Painel';
import Home from './pages/Home';
import { autenticado } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = {props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            // from: props.location -> historico de navegação
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )} />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* rota protegida com autenticacao */}
                <PrivateRoute path="/painel" component={Painel}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;