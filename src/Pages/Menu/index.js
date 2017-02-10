import React from 'react';
import Banner from '../../components/Banner/index.js';
import bannerImg from './assets/banner_table.jpg';
import './styles.scss';

export default function(props){
  let bgStyle={ backgroundImage: 'url(' + bannerImg + ')'};
  return (
    <div>
      <Banner image={bgStyle} name="Menu" />
      <div className="container"></div>
    </div>
  )
}
