import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container } from './styles.css';

import Navbar from '../Navbar';

const Layout = ( {children})=>{
  
    return (
        <div className="main">
          <Navbar/>
          <main className="main-wrapper">
            {children}
          </main>
        </div>
    )
  
};

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Layout);

