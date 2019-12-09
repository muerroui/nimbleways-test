import React from "react";
import './App.css';
import DatePicker from 'react-date-picker';
import {daysDiffTwoDates} from '../util/date';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      daysDiff: 0
    };
  }

  render() {
    return (
      <div>
      <form>
        <label>Start Date</label>
        <DatePicker
          onChange={this.handleDateChange.bind(this,'startDate')}
          value={this.state.startDate}
          name={'startDate'}
        />
        <label>End Date</label>
        <DatePicker
          onChange={this.handleDateChange.bind(this,'endDate')}
          value={this.state.endDate}
          name={'startDate'}
        />
        <input type="button" value="Submit"
          onClick={this.onSubmit}
        />
      </form>
        There are
        <span> {this.state.daysDiff} </span>
        day(s) between start and end date
      </div>
    );
  }

  handleDateChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  onSubmit = () => {
    this.setState({
      ...this.state,
      daysDiff: daysDiffTwoDates(this.state.startDate, this.state.endDate)
    });
  };

}
