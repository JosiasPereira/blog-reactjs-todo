import React from 'react';
import Navitem from '../Navitem';
import { connect } from 'react-redux';
import { Container } from './styles.css';

export const Navitens = ({clicked,loggedIn}) =>{
    let links;
    
    if (loggedIn){
        links =(
            <ul className="ul-menu">
                <Navitem clicked={clicked} className="link" link="/">
                    Home
                </Navitem>
                <Navitem clicked={clicked} link="/logout">
                    Sair
                </Navitem>
                <Navitem clicked={clicked} link="/todos">
                    To do
                </Navitem>
                <Navitem clicked={clicked} link="/profile">
                    Perfil
                </Navitem>
                
            </ul>
        );
    }else{
        links =(
            <ul className="ul-menu">
                <Navitem clicked={clicked} link="/">
                    Home
                </Navitem>                
                <Navitem clicked={clicked} link="/login">
                    Entrar
                </Navitem>
                <Navitem clicked={clicked} link="/signup">
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
