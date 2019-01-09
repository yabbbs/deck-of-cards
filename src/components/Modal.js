import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  '../styles/modal.scss';
import {
    getNewDeck,
    getNewCards,
    setModal
  } from '../actions';

  
class Modal extends Component{
    closeModal = () => {
        console.log('close modal');
        this.props.setModal();
        this.props.getNewDeck('');
    }

    render(){
        return (
            <div className='modal-wrapper'>
                <span className='modal'>
                    <span className='exit-modal' onClick={this.closeModal}>&#215;</span>
                    <span>CONGRATS YOU DREW ALL OF THE QUEENS</span>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      cards: state.BtnViewStateReducer.cards
    }
  };
  
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