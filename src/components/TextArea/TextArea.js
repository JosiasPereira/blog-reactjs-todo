import React, { Component } from 'react';

import { Container } from './styles.css';

export default class TextArea extends Component {

    render() {
        const { field, form: { touched, errors },textError,error, ...props } = this.props;    
        
    return (
        <>
            <textarea 
                {...field} 
                {...props}  
                className="textArea"           
            >
            </textarea>
            <div className={'textArea-error'+ (errors[field.name] && touched[field.name] ? ' textArea-error-visible': '')}>
                {errors[field.name]}
            </div>
        </>
    );
    }
}
