import React, { Component } from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';
import PlayerCard from '../../ui/playerCard';
import Otamendi from '../../../Resources/images/players/Otamendi.png';

class HomeCards extends Component {  
  constructor(){
    super();

    const { innerWidth: width } = window;

    this.state = {
      cards: [
        {
          bottom: 90,
          left: Math.floor(width * 0.075)
        },
        {
          bottom: 60,
          left: Math.floor(width * 0.05)
        },
        { bottom: 30,
          left: Math.floor(width * 0.025)
        },
        {
          bottom: 0,
          left: 0
        }
      ]
    }
  }

  showAnimateCards = () => (
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: {duration: 500, ease: easePolyOut}
        }}
      >
        {({left, bottom}) => {
          return (
            <div 
              style={{
                position: 'absolute',
                left: left,
                bottom: bottom
              }}
            >
              <PlayerCard
                number="30"
                name="Nicolas"
                lastname="Otamendi"
                bck={Otamendi}
              />
            </div>
          )
        }

        }
      </Animate>
    ))
  );

  render() {
    return (
      <div>
          {this.showAnimateCards()}
      </div>
    );
  }
}

export default HomeCards;