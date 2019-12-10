import React from 'react';
import {NavLink} from 'react-router-dom';
import { Container } from './styles.css';

export const Navitem = ({link, children, clicked}) => {
    return(
        <li className="li">
            <NavLink className="link"
                to={link}
                exact     
                onClick={clicked}           
                activeClassName="li-active"
                
            >
                {children}
            </NavLink>
        </li>
    )

};

export default Navitem;
