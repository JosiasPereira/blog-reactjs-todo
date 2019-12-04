import React, { Component } from 'react';

 import { Container } from './styles.css';

export default class Button extends Component {
  render() {
      const {children,...props} = this.props;
    return (
        <>
            <button {...props}>
                {children}
            </button>
        </>
    );
  }
}
