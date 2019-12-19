
import React, { Component } from 'react';
import  Dishdetail from './Dishdetail';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'; 


function RenderMenuItem ({dish, onClick}) {
  return (
      <Card
          onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
      </Card>
  );
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
      return (
          <div className="col-12 col-md-5 m-1"  key={dish.id}>
              <RenderMenuItem dish={dish} onClick={props.onClick} />
          </div>
      );
  });

  return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
      </div>
  );
}

class CardMenu extends Component 
{
  renderDish(dish)
  {
    if(dish != null)
    {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />                 
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }
    else{
      return(
        <div> </div>
      )
    }
  }

  renderComments()
  {
    if(this.props.comments != null)
    {
      const comments = this.props.comments.map((cmt) => {
        return(
          <div>
            <h4>{cmt.comment}</h4>
            <p> -- {cmt.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
          </div>
        );
      });
      return comments;
    }
    else 
    return(<div></div>);  
  }

  render() 
  {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick= {(dishId)=> this.props.onClick(dishId)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />                 
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderComments()};
          </div>
        </div>
      </div>
    );
  }
}

export default CardMenu;