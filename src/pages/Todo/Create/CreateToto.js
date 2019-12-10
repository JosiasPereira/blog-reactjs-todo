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

class CreateTodo extends Component {
    
    handleSubmit = async (values, {resetForm})=> {
  
      const result = await this.props.addTodo(values);
      
      if (result){
        resetForm();
        this.handleCancel();
      }
        
    
    }
    handleCancel = ()=>{
      this.props.close();      
    }
    
    handleChange = name => event => {
      this.setState({[name]: event.target.value})
      
    };

    
      render() {
        const {loading, opened, close} = this.props;
        return (
            <Modal opened={opened} close={close}>
            <Formik  
                onSubmit={this.handleSubmit}
                initialValues={{            
                  todo: '',                          
                }}
                validationSchema={TodoSchema}          
              >          
              <div className="form-wrapper-modal">
                <div className="form-title">
                  NOVO TO DO
                </div>
                <Form>              
                                    
                  <Field              
                    placeholder="Escreva sua tarefa..."                    
                    type="text"
                    name="todo"
                    component={Input}   
                    ref={(input) => { this.inputTodo = input }}                  
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addTodo : actions.addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
