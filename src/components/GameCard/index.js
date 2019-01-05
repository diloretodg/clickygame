import React, { Component } from "react";
import Card from "../Card";

class GameCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render(props) {
        return(
            <Card 
                {...props}
                onClick={() => props.handleClick(props.id)}
                id={this.props.id}
                name={this.props.name}
                image={this.props.image}
            />
        )
    }
}



export default GameCard
