
import React, { Component } from 'react';
import CardMenu from './CardMenu';
import DishDetail from './Dishdetail';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
    this.onDishSelect=this.onDishSelect.bind(this);
  }

  onDishSelect(dishId)
  {
    this.setState({ selectedDish: dishId });
    console.log(this.state.selectedDish);
  }

  render() {
    return (
      <div>
        <Header />
        <CardMenu dishes={this.state.dishes} comments={DISHES[0].comments}/>
         {/* onClick= {(dishId)=> this.onDishSelect(dishId) } /> */}
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  
        {/* filter returns an array, so selecting the 1st element as the result */}
        <Footer />
      </div>
    );
  }
}

export default Main;