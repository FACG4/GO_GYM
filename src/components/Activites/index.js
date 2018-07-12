import React, {Component} from 'react';

import Abutton from './Active_button';

import './style.css';

class Actives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
     this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {

      this.props.changeType(e.target.id);
      this.props.changeView('graph');

    }

  render() {


    return (
      <div className="big_div">
    <Abutton handleClick={this.handleClick} url="https://i.imgur.com/nr0Ucee.png" text1="BENCH PRESS" button_style="button3_style" img_style="img3_style" bg_color="red3_bg" />
    <Abutton handleClick={this.handleClick} url="https://i.imgur.com/hd6Q4cn.png" text1="SQAUT" button_style="button3_style" img_style="img3_style" bg_color="blue3_bg" />
    <Abutton handleClick={this.handleClick} url="https://i.imgur.com/lFGtlfS.png" text1="DEADLIFT" button_style="button3_style" img_style="img3_style" bg_color="green3_bg" />
    </div>
    );
  }
}

export default Actives;
