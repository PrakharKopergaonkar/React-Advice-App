import React, { Component } from 'react';
import axios from 'axios'; //Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.
import './App.css';

class App extends Component {
  state = {
    advice: ''
  };
  componentDidMount() {
    this.fetchadvice()
  }
  fetchadvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip
        this.setState({advice})
      //  document.write(response.data.slip.advice)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const {advice} = this.state
    return (
      <div className="App">
        <div className="card">
        <h1 className="heading"> {advice}</h1>
        </div> 
        <button className="button" onClick={this.fetchadvice}>
          <span> Give me advice </span>
        </button>
      </div>
    );
  }
}

export default App;
