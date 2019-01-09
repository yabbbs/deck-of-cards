import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { queenChecker } from '../utils/queenChecker';
import Modal from './Modal';
import {
  getNewDeck,
  getNewCards,
  setModal
} from '../actions'

import '../styles/button.scss';

class DrawCardBtn extends Component {

  startNewGame = () => {
    this.setState({cards: []});
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => {
        this.props.getNewDeck(res.data.deck_id);
    })
  }

  twoNewCards = () => {
    let num = queenChecker(this.props.cards);
    // console.log('num', num)
    if (num === 4){
      console.log('you won');
      this.props.setModal();
    } else {
      axios.get(`https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=2`)
      .then(res => {
        this.props.getNewCards(res.data.cards);
      })
    }
  }

  render() {
    return (
        <div className='btn-container'>
          { this.props.modalStatus && <Modal /> }
          <div className="pure-material-button-contained" onClick={this.startNewGame}>
            Start New Game
          </div>
          {
            this.props.deckId 
            ? 
            <div className="pure-material-button-contained" onClick={this.twoNewCards} id="addCardsBtn">
              Draw Two Cards
            </div> 
            : null
          }
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    cards: state.BtnViewStateReducer.cards,
    modalStatus: state.BtnViewStateReducer.modalStatus,
    deckId: state.BtnViewStateReducer.deckId
  }
};

DrawCardBtn.propTypes = {
  getNewDeck: PropTypes.func,
  setModal: PropTypes.func,
  modalStatus: PropTypes.bool,
  cards: PropTypes.array,
  deckId: PropTypes.string
};

const mapDispatchToProps = {
  getNewDeck,
  getNewCards,
  setModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawCardBtn);
