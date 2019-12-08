import React, { Component } from 'react';

 import { Container } from './styles.css';

export default class Button extends Component {
  render() {
      const {children, loading,...props} = this.props;
    return (
        <>
            <button 
              className={loading ? 'button-loading':''} 
              {...props}
              disabled={loading}
            >
                <div ></div>
                {children}
            </button>
        </>
    );
  }
}
