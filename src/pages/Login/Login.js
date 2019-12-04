import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles.css';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as Yup from 'yup';

class Login extends Component {
  
  state={
    a:false,
    error:false,
    email:'',
    password:''
  }

  
  componentDidMount=()=>{
    setTimeout(()=>{
      this.setState({a:true})
    },1000);
  
    setTimeout(()=>{
      this.setState({a:false})
    },2000);

    
  }
  
  handleSubmit = (event)=> {
    
    

    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email('E-mail inválido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .required('A senha é obrigatória')
        .min(8, 'Muito curto'),
    });

    const {email, password} = this.state;
    const data={
      email,
      password
    }
    
    LoginSchema.validate(data,{recursive:true})
      .catch((error)=>{
        console.log(error.errors)
      })
      .then(valid=>{
        console.log(valid)
      })
    console.log('sfsd')
      event.preventDefault();
    
  }


  handleChange = name => event => {
    this.setState({[name]: event.target.value})
    
  };

  render() {

    


    return (
        <form onSubmit={this.handleSubmit}>
          
          <div className="form-wrapper">
            <div className="form-title">
              ACESSE SUA CONTA
            </div>
            <Input
              placeholder="Digite seu email..."
              textError="email inválido"
              error={this.state.error}
              name="email"
              onChange={this.handleChange('email')}
            >
            </Input>
            <Input
              placeholder="Digite sua senha..."
              textError="senha errada"
              type="password"
              name="password"
              error={this.state.error}  
              onChange={this.handleChange('password')}            
            >
            </Input>
            <Button
              type="submit"
              
            >
              Entrar
            </Button>
            {this.state.email}
            {this.state.password}
         </div>
         
        </form>
        
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
