import React from 'react';
import {Link} from 'react-router';
import './styles.scss';

function ListLink(props){
  return (
    <li><Link activeClassName="active" to={props.to}>
      {props.info}
    </Link></li>
  )
}
export default function(props) {
    return (
      <div>
        <nav className="navbar">
          <nav className="wrapper">
            <div className="logo"></div>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="label-toggle"/>
            <ul>
              <ListLink to="/" info="About"/>
              <ListLink to="/menu" info="Menu"/>
              <ListLink to="/gallery" info="Gallery"/>
              <ListLink to="/contact" info="Contact"/>
            </ul>
          </nav>
        </nav>
      {props.children}
    </div>
    )
}
