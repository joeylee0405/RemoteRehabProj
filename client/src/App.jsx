import React from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", paitents: [] };
    this.handleClick= this.handleClick.bind(this)
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));

  }
  componentWillMount() {
    this.callAPI();
  }

  handleClick() {
    console.log("Click has been registered")
    Axios.get('http://localhost:9000/patients').then((res) => {
      console.log(res.data);
      this.setState({ apiResponse: res.data })
    }).catch((e) => {
      console.error(e);
    });

  
  }
 

render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {this.state.apiResponse}
        </p>
        <button onClick={this.handleClick} >Hent alle pasienter{ this.state.paitents}</button>
        
      </header>
    </div>
  );
}
}

export default App;
