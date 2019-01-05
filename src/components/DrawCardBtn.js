import React, { Component } from 'react';
import '../styles/button.scss';
// import Button from '@material-ui/core/Button';

class DrawCardBtn extends Component {
    render() {
      return (
        <div className='btn-container'>
          Press to draw two cards until you get a queen in each face !
          <div className="pure-material-button-contained">
            Draw Two Cards
          </div>
        </div>
      );
    }
  }
  
  export default DrawCardBtn;