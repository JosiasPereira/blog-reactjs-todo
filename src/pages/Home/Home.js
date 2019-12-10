import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
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
export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);