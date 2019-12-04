import React, { Component } from 'react';

import { Container } from './styles.css';

export default class Input extends Component {

    render() {
        const { textError,error, ...props } = this.props;    
        
    return (
        <>
            <input {...props}              
            >
            </input>
            <div className={'input-error'+ (error ? ' input-error-visible': '')}>
                {textError}
            </div>
        </>
    );
    }
}
