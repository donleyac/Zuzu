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
          <p className="emph">Nam mollis massa ligula, eget pharetra ipsum vulputate vulputate.</p>
          <p>Curabitur ut sapien consectetur,
            tempor erat congue, volutpat eros. Maecenas ligula urna,
             ultrices a rutrum vitae, scelerisque eget leo. Pellentesque
              sapien tortor, dapibus ut facilisis et, vehicula et lacus.
              Nullam ante mi, tempor in consequat at, tincidunt eu nunc.
              Sed quis tristique erat. Etiam mollis leo vel ipsum venenatis,
              et pharetra purus aliquet. Vestibulum finibus nisi at nisi
              scelerisque tempor. Nunc vitae libero condimentum, ultricies
              libero in, blandit dolor. Duis vitae tellus nec orci tempus
              sagittis id sit amet metus.</p>
          <p className="emph">Nam mollis massa ligula, eget pharetra ipsum vulputate vulputate.</p>
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
