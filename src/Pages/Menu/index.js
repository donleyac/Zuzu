import React from 'react';
import {Link} from 'react-router';
import Banner from '../../components/Banner/index.js';
import Card from '../../components/Card/index.js';
import './styles.scss';

//Todo Add higher res
import bannerImg from './assets/banner_wood.jpg';

import cardImg1 from '../About/assets/main_salad.jpg';
import cardImg2 from '../About/assets/md_bread.jpg';
import cardImg3 from '../About/assets/md_fig.jpg';
import cardImg4 from '../About/assets/md_salmon.jpg';

function CardInfo(props){
  return(
    <div className="CardInfo">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
      <p className="price">{props.price}</p>
    </div>
  )
}

var cardArray = [
  {category:'warm', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'warm', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'warm', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'warm', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'bev', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'bev', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'bev', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)},
  {category:'bev', image:cardImg1, info:(<CardInfo title="Item1"
    content="Aliquam aliquet faucibus massa,
    nec aliquam tortor ullamcorper vel. Suspendisse
    dapibus est at libero sollicitudin lacinia. Ut at finibus dolor."
    price="$9.99"/>)}
];


export default function(props){
  let bgStyle={ backgroundImage: 'url(' + bannerImg + ')'};
  return (
    <div className="menu">
      <Banner image={bgStyle} name="Menu"
        info={(<h1>(703) 401-7758 <br/>
              facebook.com/Zuzu<br/>
              instagram.com/Zuzu</h1>)}/>
      <div className="subheader row">
        <Link>Warm Food</Link>
        <Link>Cold Food</Link>
        <Link>Beverages</Link>
      </div>
      <div className="menu-content">
        <h1 className="sec-title">Warm Food</h1>
        <p className="descr">Healthy comfort food with roasted,
          warm ingredients, all made from scratch.</p>
        <div className="row">
          {
            cardArray.map(function(card){
              if(card.category==="warm") {
                return(
                  <Card image={card.image}>
                    {card.info}
                  </Card>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
