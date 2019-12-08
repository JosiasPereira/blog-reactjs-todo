import React from 'react';
import Navitem from '../Navitem';
import { connect } from 'react-redux';
import { Container } from './styles.css';

export const Navitens = ({clicked,loggedIn}) =>{
    let links;
    if (loggedIn){
        links =(
            <ul>
                <Navitem  link="/">
                    Home
                </Navitem>
                <Navitem link="/sair">
                    Sair
                </Navitem>
                <Navitem link="/todos">
                    To do
                </Navitem>
                <Navitem link="/profile">
                    Perfil
                </Navitem>
                
            </ul>
        );
    }else{
        links =(
            <ul>
                <Navitem  link="/">
                    Home
                </Navitem>                
                <Navitem link="/login">
                    Entrar
                </Navitem>
                <Navitem link="/signup">
                    Cadastrar-se
                </Navitem>
            </ul>
        );
    };

    
    
return <nav>{links}</nav>
}

const mapStateToProps = ({ firebase }) => ({
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified,
  });

export default connect(mapStateToProps)(Navitens);
