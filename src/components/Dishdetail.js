

import React, { Component } from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem  } from 'reactstrap'; 
import { Link } from 'react-router-dom';

class Dishdetail extends Component 
{
    constructor(props)
    {
        super(props);
    }

    RenderDish(dish)
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

    render()
    {
        if(this.props.dish != null)
        {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {/* <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div> */}
                    {/* <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div> */}
                </div>
                </div>
            );
        }
        else{
            return(
                <div> </div>
            )
        }
    }
}    

export default Dishdetail;