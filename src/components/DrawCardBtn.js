import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  addToCounter,
  getNewDeck,
  getNewCards
} from '../actions'

import '../styles/button.scss';

class DrawCardBtn extends Component {

  constructor(){
    super();
    this.state={
      deckId: null,
      cards: []
    }
  }

  startNewGame = () => {
    this.setState({cards: []});
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => {
        this.setState({deckId: res.data.deck_id});
        this.props.getNewDeck();
    })
  }

  // every time you draw two cards you check a bool if it is true or false 

  twoNewCards = () => {
      this.props.getNewCards();
  }

  render() {
    return (
        <div className='btn-container'>
          <div className="pure-material-button-contained" onClick={this.startNewGame}>
            Start New Game
          </div>
          {
            this.state.deckId 
            ? 
            <div className="pure-material-button-contained" onClick={this.twoNewCards}>
              Draw Two Cards
            </div> 
            : null
          }
        </div>
    );
  }
}

  const mapStateToProps = () => {

    return {
      
    };
};

DrawCardBtn.propTypes = {
  addToCounter: PropTypes.func,
  getNewDeck: PropTypes.func
};

const mapDispatchToProps = {
  addToCounter,
  getNewDeck,
  getNewCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawCardBtn);
