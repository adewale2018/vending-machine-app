import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import Message from './Message';
import VendingMachineImage from './img/VendingMachine.png';

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine"
      style={{backgroundImage: `url(${VendingMachineImage})`}}>
        <Message>
          <h1>Hello!, I'm a VendingMachine. What will you like to eat?</h1>
        </Message>
        <Message>
          <Link exact to="/soda">Soda</Link>
          <Link exact to="/chips">Chips</Link>
          <Link exact to="/sardines">Sardines</Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
