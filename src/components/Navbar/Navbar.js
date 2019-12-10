import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import logo from '../../images/logo.png';
import {MdMenu} from 'react-icons/md';
import  Navitens  from '../Navitens';
import { Container } from './styles.css';


class Navbar extends Component {
  state={
    showMenuMobile : false
  }
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
                <div className="menu-itens-container-web">
                  <Navitens/>
                </div>
                
                <div className="menulogo-container">
                  <MdMenu onClick={()=> {this.setState({showMenuMobile: !this.state.showMenuMobile})}} className="menulogo"/>
                  <div className={"" + (this.state.showMenuMobile? " show-menu":"hide-menu")}>
                    <Navitens
                      clicked={() =>{this.setState({showMenuMobile: false})}}
                    />
                  </div>
                </div>
                
                 
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
