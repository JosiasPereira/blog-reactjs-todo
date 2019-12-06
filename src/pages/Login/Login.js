import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles.css';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as Yup from 'yup';



const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('O e-mail é obrigatório')
    .email('E-mail inválido'),
    
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(8, 'Muito curto'),
});

class Login extends Component {

  handleSubmit = (values, formikHelpers)=> {
    
    console.log(values)
  
  }


  handleChange = name => event => {
    this.setState({[name]: event.target.value})
    
  };

  render() {

    return (
        <Formik  
            onSubmit={this.handleSubmit}
            initialValues={{            
              email: '',
              password: '',              
            }}
            validationSchema={LoginSchema}          
          >
          
          <div className="form-wrapper">
            <div className="form-title">
              ACESSE SUA CONTA
            </div>
            <Form>              
              <Field
                placeholder="Digite seu email..."
                name="email"              
                component={Input}           
              >
              </Field>
              <Field              
                placeholder="Digite sua senha..."
                textError="senha errada"
                type="password"
                name="password"
                component={Input}                     
              >
              </Field>
              <Button
                type="submit"
                
              >
                Entrar
              </Button>
            </Form>
            
         </div>
         
        </Formik>
        
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Login);
