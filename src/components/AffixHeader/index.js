import React from 'react';
import Scroll from '../Scroll/index.js';
var AffixHeader = React.createClass({
  render: function () {
    window.addEventListener('scroll', function(e){
      let viewHeight = window.innerHeight || document.documentElement.clientHeight;
      let affixOn = viewHeight * .60;
      let distanceY = window.pageYOffset || document.documentElement.scrollTop;
      console.log("VH"+viewHeight)
      console.log("Affix"+affixOn);
      console.log("Scrolled"+distanceY);
      let header = document.getElementById("affix-header");
      if (distanceY > affixOn) {
        header.classList.add("fixed")
      }
      else {
        if (header.classList.contains("fixed")) {
          header.classList.remove("fixed");
        }
      }
    });
    let inputClass = this.props.class?this.props.class:"";
    return (
      <div id="affix-header" className={inputClass}>
        {this.props.children}
      </div>
    );
  }
});
module.exports = AffixHeader;
