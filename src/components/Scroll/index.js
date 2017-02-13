import React from 'react';
import {Link, Element, Events, animateScroll, scrollSpy} from 'react-scroll';

var Scroll = React.createClass({
  componentDidMount: function() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function() {
    animateScroll.scrollToTop();
  },
  scrollToBottom: function() {
    animateScroll.scrollToBottom();
  },
  scrollTo: function() {
    animateScroll.scrollTo(100);
  },
  scrollMore: function() {
    animateScroll.scrollMore(100);
  },
  handleSetActive: function(to) {
    console.log(to);
  },
  render: function () {
    let inputClass = this.props.class?this.props.class:"";
    return (
      <span className={inputClass}>
        {this.props.to?(
          <Link activeClass="active" to={this.props.to} spy={true} smooth={true} offset={-66} duration={700}>
            {this.props.children}
          </Link>): null}
      </span>
    );
  }
});
module.exports = Scroll;
