import React from 'react';
import {NavLink} from 'react-router-dom';
import { Container } from './styles.css';

export const Navitem = ({link, children}) => {
    return(
        <li>
            <NavLink
                to={link}
                exact                
                activeClassName="li-active"
                
            >
                {children}
            </NavLink>
        </li>
    )

};

export default Navitem;
