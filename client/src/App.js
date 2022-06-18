import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ExerciseDetail from "./pages/ExerciseDetail";
import TrainingProgram from "./pages/TrainingProgram";
import NavBar from "./components/NavBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then((res) => res.text())
            .then((res) => this.setState({ apiResponse: res }));
    }
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                {this.state.apiResponse}
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
