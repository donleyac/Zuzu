import React from 'react';
import './styles.scss';

export default function(props){
  return (
    <div style={props.image} className="banner">
      <h1 className="name">{props.name}</h1>
      <span className="info">{props.info}</span>
    </div>
  )
}
