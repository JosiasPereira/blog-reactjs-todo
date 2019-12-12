import React, {useState} from 'react';
import {MdDelete} from 'react-icons/md'
import {MdEdit} from 'react-icons/md'
import ReactTooltip from 'react-tooltip';
import DeleteTodo from '../../pages/Todo/Delete';
import EditTodo from '../../pages/Todo/Edit';

import { Container } from './styles.css';

const Todo = ({todo}) => {
    const [openDelete, setOpenDelete] = useState(false);    
    const [openEdit, setOpenEdit] = useState(false);    

    return (
        <li className="todo">
            <ReactTooltip/>
            <DeleteTodo
                opened={openDelete} 
                close={() => setOpenDelete(false)}
                todo={todo}
            >
            </DeleteTodo>

            <EditTodo
                opened={openEdit} 
                close={() => setOpenEdit(false)}
                todo={todo}
            >                
            </EditTodo>
            <div className="todo-content">
                <div className="todo-text">
                    {todo.todo}
                </div>
                <div className="button-content-todo">
                    <MdDelete 
                        data-tip="Deletar este todo" 
                        className="icon-delete" 
                        onClick={() => setOpenDelete(true)}
                    />
                    
                    <MdEdit 
                        data-tip="Editar este todo" 
                        className="icon-edit"
                        onClick={() =>  setOpenEdit(true)}
                        />
                </div>
            </div>
            
        </li>
    )
};

export default Todo;
