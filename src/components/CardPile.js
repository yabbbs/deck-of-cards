import React, { Component } from 'react';
import '../styles/cardPile.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { divider } from '../utils/divider';

class CardPile extends Component {
    render() {
      let cardTypes = divider(this.props.cards);

      return (
        <div className='card-container'>
          <div className='row'>
            <span className='title'>Diamonds:</span>
            <div className='cards'>
              {
                cardTypes.diamondCards.map(card => {
                  return (
                    <div key={card.code} className='face-container'>
                      <img src={card.images.svg} alt='card' className="card"/>
                      <p className='value'>{card.value}</p>
                    </div>
                )
              })}
            </div>
          </div>

          <div className='row'>
            <span className='title'>Clubs:</span>
            <div className='cards'>
              {
                cardTypes.clubCards.map(card => {
                  return (
                    <div key={card.code} className='face-container'>
                      <img src={card.images.svg} alt='card' className="card"/>
                      <p className='value'>{card.value}</p>
                    </div>
                )
              })}
            </div>
          </div>

          <div className='row'>
            <span className='title'>Spades:</span>
            <div className='cards'>
              {
                cardTypes.spadeCards.map(card => {
                  return (
                    <div key={card.code} className='face-container'>
                      <img src={card.images.svg} alt='card' className="card"/>
                      <p className='value'>{card.value}</p>
                    </div>
                )
              })}
            </div>
          </div>

          <div className='row'>
            <span className='title'>Heart:</span>
            <div className='cards'>
              {
                cardTypes.heartCards.map(card => {
                  return (
                    <div key={card.code} className='face-container'>
                      <img src={card.images.svg} alt='card' className="card"/>
                      <p className='value'>{card.value}</p>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      cards: state.BtnViewStateReducer.cards
    };
};

CardPile.propTypes = {
  cards: PropTypes.array
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPile);
