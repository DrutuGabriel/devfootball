import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import {firebaseMatches} from '../../firebase';
import {firebaseLooper, reverseArray} from '../ui/misc';

import MatchesList from './matchesList';
import LeagueTable from './table';


class TheMatches extends Component {

  state = {
    loading: true,
    matches: [],
    filterMatches: [],
    playedFilter: 'All',
    resultFilter: 'All'
  }

  componentDidMount(){
    firebaseMatches.once('value')
    .then(snapshot => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filterMatches: reverseArray(matches)
      });

    })
  }

  showPlayed = played => {
    let list;

    if(played === 'All'){
      list = this.state.matches;
    } else {
      list = this.state.matches.filter(match => {
        return match.final == played;
      });
    }

    this.setState({
      filterMatches: list,
      playedFilter: played,
      resultFilter: 'All'
    });
  }

  showResult = result => {
    let list;

    if(result === 'All'){
      list = this.state.matches;
    } else {
      list = this.state.matches.filter(match => {
        return match.result == result;
      });
    }

    this.setState({
      filterMatches: list,
      playedFilter: 'All',
      resultFilter: result
    });
  }

  render() {
   const {filterMatches, playedFilter, resultFilter} = this.state;
    return (
      <div className="the_matches_container">
         <div className="the_matches_wrapper">
            <div className="left">
              <div className="match_filters">
                <div className="match_filters_box">
                  <div className="tag">
                    Show Match
                  </div>
                  <div className="cont">
                    <div 
                      className={`option ${playedFilter === 'All' ? 'active' : ''}`}
                      onClick={() => this.showPlayed('All')}
                    >
                      All
                    </div>
                    <div 
                      className={`option ${playedFilter === 'Yes' ? 'active' : ''}`}
                      onClick={() => this.showPlayed('Yes')}
                    >
                      Played
                    </div>
                    <div 
                      className={`option ${playedFilter === 'No' ? 'active' : ''}`}
                      onClick={() => this.showPlayed('No')}
                    >
                      Not played
                    </div>
                  </div>
                </div>

                <div className="match_filters_box">
                  <div className="tag">
                    Result game
                  </div>
                  <div className="cont">
                    <div 
                      className={`option ${resultFilter === 'All' ? 'active' : ''}`}
                      onClick={() => this.showResult('All')}
                    >
                      All
                    </div>
                    <div 
                      className={`option ${resultFilter === 'W' ? 'active' : ''}`}
                      onClick={() => this.showResult('W')}
                    >
                      W
                    </div>
                    <div 
                      className={`option ${resultFilter === 'D' ? 'active' : ''}`}
                      onClick={() => this.showResult('D')}
                    >
                     D
                    </div>
                    <div 
                      className={`option ${resultFilter === 'L' ? 'active' : ''}`}
                      onClick={() => this.showResult('L')}
                    >
                     L
                    </div>
                  </div>
                </div>
              </div>
              <MatchesList matches={filterMatches} />
            </div>
            <div className="right">
              <LeagueTable />
            </div>
         </div>
      </div>
    );
  }
}

export default TheMatches;