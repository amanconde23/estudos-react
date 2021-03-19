import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        Header
         {/*se criar um link com a href, ele recarrega toda a pagina, usando o link to, nao tem recarregamento de pagina  */}
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

export default Header;