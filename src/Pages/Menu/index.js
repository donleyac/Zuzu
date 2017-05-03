import React from 'react';
import {Link} from 'react-router';
import Banner from '../../components/Banner/index.js';
import Card from '../../components/Card/index.js';
import AffixHeader from '../../components/AffixHeader/index.js';
import Scroll from '../../components/Scroll/index.js';
import './styles.scss';

import bannerImg from './assets/banner_wood.jpg';

import cardImg1 from '../About/assets/main_salad.jpg';
import wrap from './assets/wrap.png';
import ricebowl from './assets/ricebowl.png';
import tabouli from './assets/tabouli.png';
import hummus from './assets/hummus.png';
import fries from './assets/fries.png';
import veggies from './assets/vegetables.png';
import ice_tea from './assets/ice_tea.png';
import green_tea from './assets/green_tea.png';


function CardInfo(props){
  return(
    <div className="card-info">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
      {/* <p className="price">{props.price}</p> */}
    </div>
  )
}

function ProteinCard(props){
  return (
    <div className="protein-container">
      <p className="protein-label">{props.label}</p>
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
    image: veggies,
    descrip:"Chargrilled skewered mushroom, onions, peppers, zucchini marinated in fresh herb, garlic & olive oil"
  }
];

var cardArray = [
  {category:'warm', image:wrap, info:(<CardInfo title="Pita Wrap"
    content="Grilled pita bread with hand cut fries, tomatoes, lettuce,
    garlic aioli & your choice of protein or grilled veggies."
    price="$9.99"/>)},
  {category:'warm', image:ricebowl, info:(<CardInfo title="Rice Bowl"
    content="A bowl filled with seasoned rice vermicelli, your choice of protein or
    grilled veggies, lettuce, tomatoes, & garlic sauce"
    price="$9.99"/>)},
  // {category:'warm', image:cardImg1, info:(<CardInfo title="Salad"
  //   content="A bowl filled with vibrant salad, choice of protein or grilled veggies."
  //   price="$9.99"/>)},
  {category:'cold', image:hummus, info:(<CardInfo title="Hummus"
    content="A smooth blend of chickpeas, tahini & lemon juice."
    price="$9.99"/>)},
  {category:'cold', image:tabouli, info:(<CardInfo title="Tabouli"
    content="A mix of finely diced tomatoes, onions, parsley and crushed wheat with lemon juice & olive oil vinaigrette."
    price="$9.99"/>)},
  // {category:'cold', image:cardImg1, info:(<CardInfo title="Fatoush"
  //   content="A refreshing mix of fresh romaine lettuce, cucumber, tomatoes, fresh mint, and crispy pita croutons drizzled with lemon juice, olive oil and sumac vinaigrette "
  //   price="$9.99"/>)},
  {category:'cold', image:fries, info:(<CardInfo title="Hand Cut Fries"
    content="Garlic & Herbs or Cajun"
    price="$9.99"/>)},
  {category:'bev', image:ice_tea, info:(<CardInfo title="Ice Tea"
    content="Cold brewed ice tea with a touch of lemon."
    price="$9.99"/>)},
  {category:'bev', image:green_tea, info:(<CardInfo title="Jasmine Green Tea"
    content="Refreshing green tea to brighten your day"
    price="$9.99"/>)},
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
      <div className="protein-header">
        <h1 className="sec-title">Protein Options</h1>
        <p className="descr">Choose the core ingredient in your Classic Meal</p>
      </div>
      <div className="protein-row">
        {proteinArray.map(function(elem){
            return(<ProteinCard label={elem.label} image={elem.image} descrip={elem.descrip}/>)
          })}
      </div>
      <MenuGenerator title="Classic Meals" info="Healthy comfort food with roasted,
        warm ingredients, all made from scratch." category="warm" />
      <MenuGenerator title="Healthy Sides" info="Made with fresh, organic produce
        that is locally sourced each season." category="cold" />
      <MenuGenerator title="Beverages" info="Drinks made fresh everyday." category="bev" />
    </div>
  )
}
