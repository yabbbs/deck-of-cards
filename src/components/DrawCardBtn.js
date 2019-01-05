import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCounter } from '../actions'

import '../styles/button.scss';
// import Button from '@material-ui/core/Button';

class DrawCardBtn extends Component {
    render() {
      return (
        <div className='btn-container' onClick={this.props.addToCounter}>
          Press to draw two cards until you get a queen in each face !
          <div className="pure-material-button-contained">
            Draw Two Cards
          </div>
        </div>
      );
    }
  }
  
  // export default DrawCardBtn;


  const mapStateToProps = () => {

    return {
      
    };
};

DrawCardBtn.propTypes = {
  addToCounter: PropTypes.func
};

const mapDispatchToProps = {
  addToCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawCardBtn);
