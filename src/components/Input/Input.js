import React, { Component } from 'react';

import { Container } from './styles.css';

export default class Input extends Component {

    render() {
        const { field, form: { touched, errors },textError,error, ...props } = this.props;    
        
    return (
        <>
            <input {...field} {...props}             
            >
            </input>
            <div className={'input-error'+ (errors[field.name] && touched[field.name] ? ' input-error-visible': '')}>
                {errors[field.name]}
            </div>
        </>
    );
    }
}
