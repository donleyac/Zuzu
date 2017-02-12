import React from 'react';
import {Link} from 'react-router';
import './styles.scss'

import main_img from './assets/main_salad.jpg';
import row_img1 from './assets/md_bread.jpg';
import row_img2 from './assets/md_fig.jpg';
import row_img3 from './assets/md_salmon.jpg';

export default function(props){
  return (
    <div className="about">
      <div className="top full">
        <p>Think Fresh</p>
        <div className="scroll-toggle"><i className="material-icons">keyboard_arrow_down</i></div>
      </div>
      <div className="container">
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
          <img className="box" src={row_img1}/>
          <img className="box" src={row_img2}/>
          <img className="box" src={row_img3}/>
        </div>
      </div>
    </div>
  )
}
