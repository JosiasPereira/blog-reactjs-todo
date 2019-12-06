import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles.css';


const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .required('O nome é obrigatório'),
    email: Yup.string()
      .required('O e-mail é obrigatório')
      .email('E-mail inválido'),
      
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(8, 'Muito curto'),
    confirmPassword: Yup.string()
      .required('Confirmar a senha é obrigatória')
      .min(8, 'Muito curto')
      .test('passwords-equals', 'As senha devem ser iguais', function(value) {
        return this.parent.password === value;
      }),
  });

class SignUp extends Component {


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
                    name:'',
                    email: '',
                    password: '',
                    confirmPassword:''
                }}
                validationSchema={SignUpSchema}          
                >
                
                <div className="form-wrapper">
                <div className="form-title">
                    FAÇA SEU CADASTRO
                </div>
                <Form>
                    <Field
                    placeholder="Digite seu nome..."
                    name="name"                          
                    component={Input}           
                    >
                    </Field>
                    <Field
                    placeholder="Digite seu email..."                
                    name="email"               
                    component={Input}           
                    >
                    </Field>

                    <Field              
                    placeholder="Digite sua senha..."
                    type="password"
                    name="password"
                    component={Input}        
                    >
                    </Field>
                    <Field              
                    placeholder="Confirme sua senha..."
                    type="password"
                    name="confirmPassword"
                    component={Input}        
                    >
                    </Field>
                    <Button
                    type="submit"
                    
                    >
                    Cadastrar-se
                    </Button>
                </Form>
                
                </div>
                
            </Formik>
            
        );
    }
}

const mapStateToProps = state => ({});


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SignUp);
