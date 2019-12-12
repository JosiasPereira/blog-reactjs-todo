import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/Button';
import CreateTodo  from '../Create';
import {MdAdd} from 'react-icons/md'
import Todo from '../../../components/Todo';
import * as actions from '../../../store/actions';
    


import { Container } from './styles.css';

class List extends Component {
    state = {
        openAdd : false,
        openDelete :false
    }

    componentDidMount = async() =>{
        this.props.listTodos();
    }
    handleOpenAdd =()=>{
        this.setState({openAdd : true})
    }
    handleCloseAdd =()=>{
        this.setState({openAdd : false})
    }

    
  render() {
    return (
        <div className="content-list">
            
            <CreateTodo 
                opened={this.state.openAdd} 
                close={this.handleCloseAdd}
            />
            
            
            <div className="form-title color-title">
                  TODOS SEUS <i className="text-italic">TODOS</i> ESTÃO AQUI
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

            <div className="list-todos-wrapper">
                <ul className="todo-list">                    
                    {this.props.todos.map(todo =>(                        
                        <Todo key={todo.id} todo={todo}/>                                                    
                    ))}                                            
                </ul>
                
            </div>
            {this.props.todos.length ==0 ? (
                <div className="form-title color-title">
                    Você ainda não possue nenhum <i className="text-italic">todo</i> :(
                    
                </div>
            ):""}
            

        </div>
        
    );
  }
}

const mapStateToProps = state => ({
    todos : state.todo.todos
});

const mapDispatchToProps = {
    listTodos : actions.listTodo
}
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
