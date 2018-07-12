import React, { Component } from 'react';

import Scores from './Scores';
import Actives from './Activites';
import Heads from './Header';
import Graphs from './Graph';

import '../App.css';

class App extends Component {

state = {
    view:'main',
    selectedExercise:"",
    viewHistory:[],

    scores:{
      DEADLIFT: [
        { sets: 8, reps: 18, weight: 28, date: '1526947200000' },
        { sets: 4, reps: 14, weight: 24, date: '1527033600000' },
        { sets: 8, reps: 13, weight: 21, date: '1527292800000' },
        { sets: 15, reps: 20, weight: 27, date: '1527465600000' },
        { sets: 22, reps: 12, weight: 21, date: '1527552000000' },
        ],
      SQAUT: [
        { sets: 5, reps: 10, weight: 20, date: '1526947200000' },
        { sets: 5, reps: 10, weight: 22, date: '1527033600000' },
        { sets: 5, reps: 10, weight: 24, date: '1527292800000' },
        { sets: 5, reps: 10, weight: 20, date: '1527465600000' },
        { sets: 5, reps: 10, weight: 22, date: '1527552000000' },
        ],
      BENCHPRESS: [
        { sets: 5, reps: 10, weight: 20, date: '1526947200000' },
        { sets: 5, reps: 10, weight: 22, date: '1527033600000' },
        { sets: 5, reps: 10, weight: 24, date: '1527292800000' },
        { sets: 5, reps: 10, weight: 20, date: '1527465600000' },
        { sets: 5, reps: 10, weight: 22, date: '1527552000000' },
        ],
    }
  };

//   view:0,
//   newExerciseScore:{
//     sets:"",
//     reps:"",
//     weight"",
//   }
//   previousScores:[{}]
// }

addNewScore = (form) =>{


  this.setState((previousState) => {

  let graphInfo = this.state.selectedExercise;

  if(graphInfo == 'DEADLIFT'){
    console.log("hi");
    const newState = JSON.parse(JSON.stringify(previousState));
    newState.scores[graphInfo].push(form);
    return newState;
  }
  else if(graphInfo == 'SQAUT'){
    const newState = JSON.parse(JSON.stringify(previousState));
    newState.scores[graphInfo].push(form);
    return newState;
  }
  else if(graphInfo == 'BENCH PRESS'){
    const newState = JSON.parse(JSON.stringify(previousState));
    newState.scores['BENCHPRESS'].push(form);
    return newState;
  }

  })

}

changeType = (type,value) => {

  this.setState({ selectedExercise: type });

}


changeView = (value) => {
  this.setState({ view: value });
  var newArray = this.state.viewHistory.slice();
  if(newArray[newArray.length-1] !== this.state.view){
  newArray.push(this.state.view);
  this.setState({viewHistory:newArray})
}
}



  render() {
console.log(this.state.viewHistory);
    const { view } = this.state;
    let main;
    const selected = this.state.selectedExercise === 'BENCH PRESS'? 'BENCHPRESS' : this.state.selectedExercise;
    if(view === 'main') {
      main = <Actives changeView={this.changeView} changeType={this.changeType} />
    } else if (view === 'graph') {
      const graphData = this.state.scores[selected].map((row) => {
        return { x: row.date, y: row.weight/( 1.0278 - 0.0278 * row.reps ) }
      })
      main = <Graphs changeView={this.changeView} title={this.state.selectedExercise} data={graphData} />
    } else if (view === 'scores') {
      const title = this.state.selectedExercise;
      main = <Scores changeView={this.changeView} addNewScore={this.addNewScore} title={title}/>
    }
    return (
      <div>
      <Heads changeView={this.changeView} viewHistory={this.state.viewHistory}/>
      {main}
      </div>
    );
  }
}

export default App;
