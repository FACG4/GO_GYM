import React, {Component} from 'react';
import Graph from './Graph';
import Gbutton from './Graph_button';

import './style.css';

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e) {

      // this.props.changeType(e.target.id);
      this.props.changeView('scores');

    }

  render() {
  

    return (
      <div>
        <Graph data={this.props.data} title={this.props.title} graph_class="flex-containerr" />
        <Gbutton  handleClick={this.handleClick} type1="button" value1="+" b_class="submitt_button" p1="Add New Score" />
        </div>
    );
  }
}

export default Graphs;
