import React, {Component} from 'react';
import Score from './Score_input';
import Sbutton from './Score_button';

import './style.css';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets:'',
      reps:'',
      weight:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(event) {
    const form = {
      sets: this.state.sets,
      reps: this.state.reps,
      weight: this.state.weight,
      date : Date.now(),
    }
    this.props.addNewScore(form);
    this.props.changeView('graph');
    event.preventDefault();
}

handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
  

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="add-score">Add {this.props.title} PROCCESS SCORE</h2>
        <Score handleChange={this.handleChange} url="https://imgur.com/OQZrYWj.png" placeholder="enter your sets" name="sets" bg_class="red_bg" s_class="flex-container" a_class="flex-container1" />
        <Score handleChange={this.handleChange} url="https://i.imgur.com/l1nAPa4.png" placeholder="enter your sets" name="reps" bg_class="blue_bg" s_class="flex-container" a_class="flex-container1" />
        <Score handleChange={this.handleChange} url="https://i.imgur.com/Vvq7khv.png" placeholder="enter your sets" name="weight" bg_class="green_bg" s_class="flex-container" a_class="flex-container1" />
        <Sbutton type1="submit" value1="Submit" b_class="submit_button" />
      </form>
    );
  }
}

export default Scores;
