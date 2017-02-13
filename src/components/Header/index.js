import React from 'react';
import {IndexLink} from 'react-router';
import './styles.scss';

function ListLink(props){
  return (
    <li><IndexLink activeClassName="active" to={props.to}>
      {props.info}
    </IndexLink></li>
  )
}
export default function(props) {
    return (
      <div>
        <nav className="navbar">
          <nav className="wrapper">
            <IndexLink to="/"><div className="logo"></div></IndexLink>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="label-toggle"/>
            <ul>
              <ListLink to="/" info="About"/>
              <ListLink to="/menu" info="Menu"/>
              {/* <ListLink to="/gallery" info="Gallery"/> */}
            </ul>
          </nav>
        </nav>
      {props.children}
    </div>
    )
}
