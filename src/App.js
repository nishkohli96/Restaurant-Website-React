import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import CardMenu from './components/CardMenu';
import './App.css';
import { DISHES } from './shared/dishes'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { dishes : DISHES }
  }

  render()
  {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <CardMenu dishes={this.state.dishes} />  
        <Menu dishes={this.state.dishes} />
    </div>
    );
  }
}

export default App;
