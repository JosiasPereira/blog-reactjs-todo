import React, { Component } from 'react';

import { connect } from 'react-redux';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import { Container } from './styles.css';
import * as actions from '../../../store/actions';
class Delete extends Component {

  handleDelete = async() =>{
      const res = await this.props.deleteTodo(this.props.todo.id);
      if (res){
        this.props.close();
      }
  }
  render() {
    const {loading, opened, close, todo} = this.props;
    
    return (
        <Modal opened={opened} close={close}>
            <div className="form-wrapper-modal">

                <div className="form-title">
                  CONFIRMAR EXCLUSÃO
                  
                </div>
                <div className="todo-text margin-bottom">
                    {todo.todo}
                </div>
                <div className="container-button">
                    <Button
                      type="reset"
                      loading={loading}
                      className="button button-cancel"
                      onClick={close}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      loading={loading}
                      className="button"
                      onClick={this.handleDelete}
                      loading = {loading}
                    >
                      Excluir
                    </Button>
                  </div>

            </div>
        </Modal>
    );
  }
}

const mapStateToProps = state => ({
    loading : state.todo.loading
});

const mapDispatchToProps = {
    deleteTodo : actions.deleteTodo
}
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete);
