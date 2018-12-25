import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    date: {},
    hoursArr: [],
    minutesArr: []
  }

  getDate = () => {
    const currentDate = new Date();
    const date = {};
    date.hours = currentDate.getHours().toString();
    date.minutes = currentDate.getMinutes().toString();
    const hoursArr = date.hours.split('');
    const minutesArr = date.minutes.split('');
    this.setState({
      date,
      hoursArr,
      minutesArr
    });
  }



  render() {
    const {date, hoursArr, minutesArr} = this.state;
    if (date.hours) {
      
      console.log(date);
      console.log(hoursArr);
      console.log(date.minutes);  
    }

    return (
      <div className="App">
        <h2>Click the button:</h2>
        <button onClick={this.getDate}>Click</button>
        {date.hours && <p>{`${date.hours}:${date.minutes}`}</p>}
      </div>
    );
  }
}

export default App;
