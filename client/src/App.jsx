
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ExerciseDetail from "./pages/ExerciseDetail";
import TrainingProgram from "./pages/TrainingProgram";
import NavBar from "./components/NavBar";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
      this.state = { apiResponse: ""};
      this.handleClick = this.handleClick.bind(this);
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }));
    }
    componentWillMount() {
        this.callAPI();
    }

  handleClick() {
   
      axios.get('http://localhost:9000/patients').then( (res) => {
        console.log("The patients are: " + res.data);
        this.setState({ apiResponse: res.data })
      }).catch((e) => {
        console.error(e);
      });
  
    
    }

    render() {
        return (
            <div className="App">
                {this.state.apiResponse}
                <button onClick={this.handleClick} >Hent alle pasienter{ this.state.patients}</button>
                <Router>
                    <NavBar />
                    <Routes>
                    <Route path="/" exact element={<Home />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/ExerciseDetail"  element={<ExerciseDetail />} />
                        <Route path="/TrainingProgram" element={<TrainingProgram />}/>
                    </Routes>
                </Router>
            </div>
        );
    }
} 

export default App;
