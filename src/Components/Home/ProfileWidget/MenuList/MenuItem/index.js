import React from 'react';
import { Link } from 'react-router-dom';
import FA from 'react-fontawesome';

const MenuItem = ({ icon, title, link }) => {
    return (
        <li><Link to= {link} className= "subtitle is-7"><FA name= {icon } />{ title }</Link></li>
    )
}

export default MenuItem;