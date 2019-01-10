import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  '../styles/modal.scss';
import {
    getNewDeck,
    getNewCards,
    setModal
  } from '../actions';

  
class Modal extends Component{
    startNewGame = () => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => {
            this.props.getNewDeck(res.data.deck_id);
        });
        this.props.setModal();
    }

    render(){
        return (
            <div className='modal-wrapper'>
                <span className='modal'>
                    <span className='exit-modal' onClick={this.props.setModal}>&#215;</span>
                    <span>CONGRATS YOU DREW ALL OF THE QUEENS</span>
                    <button className="modal-btn" onClick={this.startNewGame}>Start New Game</button>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
      cards: state.BtnViewStateReducer.cards
  });
  
  Modal.propTypes = {
    getNewDeck: PropTypes.func,
    setModal: PropTypes.func,
    modalStatus: PropTypes.bool,
    cards: PropTypes.array,
  };
  
  const mapDispatchToProps = {
    getNewDeck,
    getNewCards,
    setModal,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Modal);