import React from 'react';
import {Link} from 'react-router';
import Banner from '../../components/Banner/index.js';
import Card from '../../components/Card/index.js';
import AffixHeader from '../../components/AffixHeader/index.js';
import Scroll from '../../components/Scroll/index.js';
import './styles.scss';

import bannerImg from './assets/banner_wood.jpg';

import cardImg1 from '../About/assets/main_salad.jpg';
import cardImg2 from '../About/assets/md_bread.jpg';
import cardImg3 from '../About/assets/md_fig.jpg';
import cardImg4 from '../About/assets/md_salmon.jpg';


function CardInfo(props){
  return(
    <div className="card-info">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
      <p className="price">{props.price}</p>
    </div>
  )
}

function ProteinCard(props){
  let bgStyle={backgroundImage: 'url(' + props.image + ')'};
  return (
    <div className="protein-container">
      <p className="protein-label">{props.label}</p>
      <div className="protein-card" style={bgStyle} />
      <p className="protein-descrip">{props.descrip}</p>
    </div>
  )
}

var proteinArray = [
  {
    label:"Shish Tawook",
    image: cardImg1,
    descrip:"Chargrilled skewered chicken, Marinated in garlic, lemon, & oregano"
  },
  {
    label: "Lamb Shawarma",
    image: cardImg1,
    descrip:"Tender & juicy chargrilled leg of lamb marinated in fresh herb,garlic & olive oil"
  },
  {
    label: "Gyro",
    image: cardImg1,
    descrip:"Marinated beef in authentic seasoning before roasted to perfection"
  },
  {
    label: "Kafta",
    image: cardImg1,
    descrip:"Chargrilled skewered ground beef with fresh herbs, onions & spices"
  },
  {
    label:"Grilled Veggies",
    image: cardImg1,
    descrip:"Chargrilled skewered mushroom, onions, peppers, zucchini marinated in fresh herb, garlic & olive oil"
  }
];

var cardArray = [
  {category:'warm', image:cardImg1, info:(<CardInfo title="Pita Wrap"
    content="Grilled pita bread with hand cut fries, tomatoes, lettuce,
    garlic aioli & your choice of protein or grilled veggies."
    price="$9.99"/>)},
  {category:'warm', image:cardImg1, info:(<CardInfo title="Rice Bowl"
    content="A bowl filled with seasoned rice vermicelli, your choice of protein or
    grilled veggies, lettuce, tomatoes, & garlic sauce"
    price="$9.99"/>)},
  {category:'warm', image:cardImg1, info:(<CardInfo title="Salad"
    content="A bowl filled with vibrant salad, choice of protein or grilled veggies."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Hand Cut Fries"
    content="Garlic & Herbs or Cajun"
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Hummus"
    content="A smooth blend of chickpeas, tahini & lemon juice."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Tabouli"
    content="A mix of finely diced tomatoes, onions, parsley and crushed wheat with lemon juice & olive oil vinaigrette."
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Fatoush"
    content="A refreshing mix of fresh romaine lettuce, cucumber, tomatoes, fresh mint, and crispy pita croutons drizzled with lemon juice, olive oil and sumac vinaigrette "
    price="$9.99"/>)},
  {category:'cold', image:cardImg1, info:(<CardInfo title="Side Salad"
    content="Tossed salad with lettuce, tomatoes, cucumber and choice of homemade vinaigrette"
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

function MenuGenerator(props) {
  let id = props.category;
  let sectionClass="menu-content " + props.category;
  return (
    <div id={id} className={sectionClass}>
      <h1 className="sec-title">{props.title}</h1>
      <p className="descr">{props.info}</p>
      <div className="row">
        {
          cardArray.map(function(card){
            if(card.category===props.category) {
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
  )
}
export default function(props){
  let bgStyle={backgroundImage: 'url(' + bannerImg + ')'};
  return (
    <div className="menu">
      <Banner image={bgStyle} name="Menu"
        info={(<h1>(703) 401-7758 <br/>
              facebook.com/Zuzu<br/>
              instagram.com/Zuzu</h1>)}/>
      <AffixHeader affixOn={70} class="subheader row">
        <Scroll to="warm">Classic Meals</Scroll>
        <Scroll to="cold">Healthy Sides</Scroll>
        <Scroll to="bev">Beverages</Scroll>
      </AffixHeader>
      <div className="protein-row">
        {proteinArray.map(function(elem){
            return(<ProteinCard label={elem.label} image={elem.image} descrip={elem.descrip}/>)
          })}
      </div>
      <MenuGenerator title="Classic Meals" info="Healthy comfort food with roasted,
        warm ingredients, all made from scratch." category="warm" />
      <MenuGenerator title="Healthy Sides" info="Made with fresh, organic produce
        that is locally sourced each season." category="cold" />
      <MenuGenerator title="Beverages" info="Drink Responsibly." category="bev" />
    </div>
  )
}
