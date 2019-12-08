import React, {useEffect} from 'react';
import * as actions from '../../store/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

const LogOut = ({logOut}) => {
    useEffect(()=>{
        logOut();
    });
    return null
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    logOut     : actions.signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);
