import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';
import {CityLogo} from '../ui/icons';

class Header extends Component {
  constructor(){
    super();

    this.state = {
      logoLeft: 0
    };

    this.logoContainer = React.createRef();
  }
  

  componentDidMount(){
    // add event listener
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    // remove event listener
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    // const containerWidth = this.logoContainer.current.getBoundingClientRect().width;

    let logoLeft = (window.scrollY / (window.document.body.offsetHeight - window.top.innerHeight)) * 100;
    if(logoLeft > 100){
      logoLeft = 100;
    }

    this.setState({
      logoLeft
    });
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0',
          borderBottom: '2px solid #00285e'
        }}
      >
        <Toolbar style={{display: 'flex'}}>
          <div style={{flexGrow: 1}}>
            <div className="header_logo" ref={this.logoContainer}>
              <CityLogo
                link={true}
                linkTo="/"
                width="50px"
                height="50px"
                left={this.state.logoLeft}
              />
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">The team</Button>
          </Link>

          <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;