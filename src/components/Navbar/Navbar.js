import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/logo.png';

import  Navitens  from '../Navitens';

import { Container } from './styles.css';


class Navbar extends Component {
  render() {
    return (
        <header className="header">
            <div className="content-header">
                <div className="logo">
                    <img  src={logo}/>
                    <h2>
                        App To-do 
                    </h2>
                </div>
                <Navitens>

                </Navitens>
                
            </div>

        </header>
    )
  }
}

const mapStateToProps = state => ({});


export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Navbar);
