import React from 'react';
import {Link} from 'react-router';
import Scroll from '../../components/Scroll/index.js';
import './styles.scss'

import main_img from './assets/main_salad.jpg';
import row_img1 from './assets/md_bread.jpg';
import row_img2 from './assets/md_fig.jpg';
import row_img3 from './assets/md_salmon.jpg';

export default function(props){
  let img1_style={ backgroundImage: 'url(' + row_img1 + ')'};
  let img2_style={ backgroundImage: 'url(' + row_img2 + ')'};
  let img3_style={ backgroundImage: 'url(' + row_img3 + ')'};
  return (
    <div className="about">
      <div className="top full">
        <p>Think Fresh</p>
        <Scroll class="scroll-toggle" to="container">
          <i className="material-icons">keyboard_arrow_down</i>
        </Scroll>
      </div>
      <div id="container" className="container">
        <div className="text-block">
          <p className="emph">Taste the flavors of the Mediterranean</p>
          <p>Zuzu Cuisine’s menu contains an extensive selection of Mediterranean Cuisine that offers a
            perfect balance of both flavor and nutrition. Our goal is to create a farm to table experience, that
            will combine the freshest ingredients with authentic family recipes passed down from generation
            to generation. A few of Zuzu Cuisine’s menu items will be seasonal to ensure the highest quality
            standards, while also bringing the best flavors nature can provide.</p>
          <p className="emph">Feel happy and healthy.</p>
        </div>
        <Link className="menu-button" to="/menu">View Our Menu</Link>
        <div className="row">
          <div className="box background-img" style={img1_style}/>
          <div className="box background-img" style={img2_style}/>
          <div className="box background-img" style={img3_style}/>
        </div>
      </div>
    </div>
  )
}
