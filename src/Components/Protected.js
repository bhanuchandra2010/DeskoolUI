import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Guest from '../Pages/Guest';
import User from '../Pages/User';

function Protected(props) {
    const Component = props.cmp;
    var auth = localStorage.getItem('auth');
    console.log(auth);
    return <div>{<Component />}</div>;
}

export default Protected;
