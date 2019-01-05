import React, { Component } from "react";
import Header from "../Header";
import GameCard from "../GameCard";
import flags from "../../flags.json";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Footer from "../Footer";



function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class Game extends Component {
  state = {
    gameOver: false,
    score: 0,
    topScore:0,
    clicked:[],
    message:"Click a Tile and dont click the same tile",
    flags: flags
  };

  componentDidMount() {
    this.tileShuffle();
  }
  
  handleClick = id => {
    console.log(id)
    .then(this.tileShuffle())
    .catch(err => console.log(err))
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  tileShuffle = () => {
    console.log("shuffling Tiles")
    let shuffled = shuffle(flags);
    this.setState({flags: shuffled})
  }
   
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  newGame = () => {
    this.setState((prevState) => ({
      score: 0,
      topScore: prevState.topScore,
      clicked: [],
      gameOver: false,
    }))
  }
    
  render(props) {
    return (
    <div>
      <Header title = "Clicky React Game"
      {...props}
      score={this.state.score}
      msg={this.state.message}
      topScore={this.state.topScore}
      />
      <Container style={{ minHeight: "80%" }}>
        <Row>
          <Col size="md-12">
          {this.state.flags.map(flag => (
            <GameCard
            id={flag.id}
            key={flag.id}
            name={flag.name}
            image={flag.image}
            onClick={this.tileShuffle}
            handleClick={this.handleClick}
            />
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
      );
    }
};
  
export default Game;
