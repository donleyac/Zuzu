import React from 'react';
import './styles.scss';

export default function(props){
  return (
    <div style={props.image} className="banner">
      <p className="name">{props.name}</p>
      <p className="info">{props.info}</p>
    </div>
  )
}
