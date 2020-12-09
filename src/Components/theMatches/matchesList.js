import React, { Component } from 'react';

class MatchesList extends Component {
  state = {
    matchesList: []
  }

  static getDerivedStateFromProps(props, state){
    return {
      matchesList: props.matches
    }
  }

  render() {
    return (
      <div>
         List
      </div>
    );
  }
}

export default MatchesList;