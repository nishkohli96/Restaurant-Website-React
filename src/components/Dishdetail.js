

import React, { Component } from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap'; 

class Dishdetail extends Component 
{
    render()
    {
        if(this.props.selectedDish != null)
        {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />                 
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>    
            )
        }
        else{
            return(
                <div> </div>
            )
        }
    }
}    

export default Dishdetail;