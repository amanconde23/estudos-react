import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produto from './pages/Produto'
import Erro from './pages/Erro';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      {/* switch exibe somente um componente por vez */}
      <Switch>
        {/* se nao colocar exact, ele carrega qualquer rota q contenha barra */}
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        {/* passando rota com parametro */}
        <Route path="/produto/:id" component={Produto} />
        {/* qualquer pagina que nao exista que seja digitado ira abrir erro*/}
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
