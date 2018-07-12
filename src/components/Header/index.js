import React, {Component} from 'react';

import Head from './Header';

import './style.css';

class Heads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
     this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {

      // this.props.changeType(e.target.id);
      this.props.changeView('main');

    }

    backHandleClick = (e) => {
      const arrrr = this.props.viewHistory;
      this.props.changeView(arrrr[arrrr.length-1])
    }

  render() {
console.log(this.props.viewHistory);

    return (
      <div>
    <Head newArray={this.props.newArray} backHandleClick={this.backHandleClick} handleClick={this.handleClick} color1="color1" color2="color2" text2="GO" text6="GYM" text3="<Back" bg_color="bluee_bg" />
    </div>
    );
  }
}

export default Heads;
