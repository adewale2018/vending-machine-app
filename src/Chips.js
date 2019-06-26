import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import ChipsImg from './img/Chips.png';
import './Chips.css';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, {x, y}]
    }));
  }
  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img 
        key={i}
        src={ChipsImg}
        className='bag'
        style={{top: `${bag.y}px`, left: `${bag.x}px`}}
        alt="bag of lay's chips"
      />
    ));
    return (
      <div className="Chips">
        <Message>
          <h2>bags eaten: {this.state.bags.length}</h2>
          <button onClick={this.handleClick}>nom nom nom</button>
          <h3>
          <Link to="/">Go Homepage</Link>
          </h3>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Chips;
