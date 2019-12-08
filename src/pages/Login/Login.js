import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import * as actions from '../../store/actions';
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

  handleSubmit = async (values, formikHelpers)=> {
  
    await this.props.login(values);
    console.log(values)
  
  }


  handleChange = name => event => {
    this.setState({[name]: event.target.value})
    
  };

  render() {
    const {loading} = this.props;
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
                autoComplete="off"          
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
                loading={loading}
              >
                Entrar
              </Button>
              {this.props.error}
            </Form>
            
         </div>
         
        </Formik>
        
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading
});

const mapDispatchToProps = {
  login     : actions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
