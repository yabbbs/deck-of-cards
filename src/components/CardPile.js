
import React, { Component } from 'react';
import '../styles/cardPile.scss';
// import Button from '@material-ui/core/Button';

class CardPile extends Component {
    render() {
      return (
        <div className='card-container'>
          <div className='diamonds'>
            <span>Diamonds:</span>
          </div>

          <div className='Hearts'>
            <span>Hearts:</span>
          </div>

          <div className='Spades'>
            <span>Spades:</span>
          </div>

          <div className='Clubs'>
            <span>Clubs:</span>
          </div>
        </div>
      );
    }
  }
  
  export default CardPile;