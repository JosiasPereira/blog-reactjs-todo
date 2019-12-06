import React from 'react';
import Navitem from '../Navitem';

import { Container } from './styles.css';

export const Navitens = ({clicked}) =>{
    let links;
    links =(
        <ul>
            <Navitem  link="/">
                Home
            </Navitem>
            <Navitem link="/sair">
                Sair
            </Navitem>
            <Navitem link="/login">
                Entrar
            </Navitem>
            <Navitem link="/signup">
                Cadastrar-se
            </Navitem>
        </ul>
    );
return <nav>{links}</nav>
}

export default Navitens;
