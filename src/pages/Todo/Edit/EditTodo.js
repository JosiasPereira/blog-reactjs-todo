import React, { Component } from 'react';
import * as Yup from   'yup';
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';

import { Container } from './styles.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import TextArea from '../../../components/TextArea';
import * as actions from '../../../store/actions';


const TodoSchema = Yup.object().shape({
    todo: Yup.string()
      .required('O todo é obrigatório')
      .min(4, 'Muito curto'),
  });

class Edit extends Component {
    
    handleSubmit = async (values, {resetForm})=> {
  
      const data={
          id : this.props.todo.id,
          todo : values.todo
      }
      const result = await this.props.updateTodo(data);
      
      if (result){
        resetForm();
        this.handleCancel();
        this.props.listTodos();
      }
        
    
    }
    handleCancel = ()=>{
      this.props.close();      
    }
    
    
      render() {
        const {loading, opened, close} = this.props;
        return (
            <Modal opened={opened} close={close}>
            <Formik  
                onSubmit={this.handleSubmit}
                initialValues={{            
                  todo: this.props.todo.todo,                          
                }}
                validationSchema={TodoSchema}          
              >          
              <div className="form-wrapper-modal">
                <div className="form-title">
                  EDITAR TODO
                </div>
                <Form>              
                                    
                  <Field              
                    placeholder="Escreva sua tarefa..."                    
                    type="text"
                    name="todo"
                    component={Input}   
                    
                  >
                  </Field>
                  <div className="container-button">
                    <Button
                      type="reset"
                      loading={loading}
                      className="button button-cancel"
                      onClick={this.handleCancel}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      loading={loading}
                      className="button"
                    >
                      Salvar
                    </Button>
                  </div>
                  {this.props.error}
                </Form>
                
             </div>
             
            </Formik>
            </Modal>
            
        );
      }
}

const mapStateToProps = state => ({
  loading : state.todo.loading
});

const mapDispatchToProps = {
  updateTodo : actions.updateTodo,
  listTodos : actions.listTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
