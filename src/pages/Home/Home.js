import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

 import { Container } from './styles.css';

class Home extends Component {
  render() {
    return (
        <div className="container-home">
          <h2>Use este app para salvar suas tarefas a fazer!</h2>
        </div>
      
    )
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);