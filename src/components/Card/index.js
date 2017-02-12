import React from 'react';
import './styles.scss';

export default function(props){
  let cardStyle={ backgroundImage: 'url(' + props.image + ')'};
  return (
    <div className="card">
      <div className="card-image" style={cardStyle} />
      {props.children}
    </div>
  )
}
