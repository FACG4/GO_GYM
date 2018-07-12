
import React from 'react';
import PropTypes from 'prop-types';

 import './style.css';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries, VerticalGridLines} from 'react-vis';
import 'react-vis/dist/style.css';

export default class Graph extends React.Component {

  render(){
    return (
      <React.Fragment>
      <div className={this.props.graph_class}>
      <h1> {this.props.title} PROGRESS </h1>
      <XYPlot width={300} height={280}  >
        <XAxis xType={'time'} title="TIME"/>
        <YAxis title="PROGRESS"/>
        <HorizontalGridLines />
        <VerticalGridLines />
        <LineMarkSeries strokeWidth={2} data={this.props.data}/>
      </XYPlot>
      </div>
      </React.Fragment>
    )
  }
}
Graph.propTypes = {
  title: PropTypes.string.isRequired,
  graph_class: PropTypes.string.isRequired,
};
// import React from 'react';
// import PropTypes from 'prop-types';
//
// import './style.css';
//
// const Graph = props => (
//
//   <div className={props.graph_class}>
//     <h1> {props.text4} </h1>
//     <img src={props.url} alt="" />
//   </div>
// )
// Graph.propTypes = {
//   url: PropTypes.string.isRequired,
//   text4: PropTypes.string.isRequired,
//   graph_class: PropTypes.string.isRequired,
// };
//
// export default Graph;
//
