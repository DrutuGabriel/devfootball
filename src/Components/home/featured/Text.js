import React from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../Resources/images/featured_player.png';

class Text extends React.Component{

  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity:[1],
        rotate:[360],
        timing:{
          duration: 1000,
          ease: easePolyOut
        }
      }}
    >
      {({opacity, rotate}) => {
        return (
          <div 
            className="featured_number"
            style={{
              opacity,
              transform: `rotateY(${rotate}deg)`,
            }}
            >
              3
          </div>
        );
      }}
    </Animate>
  );


  animateFirst = () => (
    <Animate
    show={true}
    start={{
      opacity: 0,
      x: 39.3,
    }}
    enter={{
      opacity:[1],
      x: [20.2],
      timing:{duration: 500, ease: easePolyOut}
    }}
  >
    {({opacity, x, y}) => {
      return (
        <div 
          className="featured_first"
          style={{
            opacity,
            left: `${x}%`
          }}
          >
            League
        </div>
      );
    }}
  </Animate>
  );


  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 39.3,
      }}
      enter={{
        opacity:[1],
        x: [20.2],
        timing:{
          duration: 500, 
          ease: easePolyOut, 
          delay: 300
        }
      }}
    >
      {({opacity, x, y}) => {
        return (
          <div 
            className="featured_second"
            style={{
              opacity,
              left: `${x}%`
            }}
            >
              Championships
          </div>
        );
      }}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity:[1],
        timing:{
          duration: 500, 
          ease: easePolyOut, 
          delay: 800
        }
      }}
    >
      {({opacity}) => {
        return (
          <div 
            className="featured_player"
            style={{
              opacity,
              background: `url(${FeaturedPlayer})`,
            }}
            >
             
          </div>
        );
      }}
    </Animate>
  );

  render(){
    return (
      <div className="featured_text">
        { this.animatePlayer() }
        { this.animateNumber() }
        { this.animateFirst() }
        { this.animateSecond() }
      </div>
    );
  }
};

export default Text;