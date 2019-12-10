import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button';
import CreateTodo  from '../Create';
import {MdAdd} from 'react-icons/md'

import { Container } from './styles.css';

class List extends Component {
    state = {
        openAdd : false
    }
    handleOpenAdd =()=>{
        this.setState({openAdd : true})
    }
    handleCloseAdd =()=>{
        this.setState({openAdd : false})
    }
  render() {
    return (
        <div className="form-wrapper content-list">
            <CreateTodo 
                opened={this.state.openAdd} 
                close={this.handleCloseAdd}
            />
            <div className="form-title color-title">
                  TODOS SEUS TODOS ESTÃO AQUI
            </div>
            <Button
                className="button button-add"
                onClick={this.handleOpenAdd}    
            >
                <div className="children-button">
                    <MdAdd 
                        color="#ffffff" 
                        className="add-icons"
                    />
                    Novo Todo
                </div>
                
            </Button>            
        </div>
        
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(List);
