import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './styles.css';

const Modal = React.memo(
    ({ opened, close, children }) => {
      return ReactDOM.createPortal(
        <>
          <div 
            className={"backdrop" + (opened? " backdrop-opened":"")} 
            onClick={close}             
            >
          </div>
          <div 
            className={"wrapped-modal" + (opened? " wrapped-modal-opened":"")}         
            >
            <div className="inside-wrapper">{children}</div>
          </div>
        </>,
        document.getElementById('root-modal')
      );
    },
    (prevProps, nextProps) => {
      return prevProps.opened === nextProps.opened;
    }
  );

export default Modal;
