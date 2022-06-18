import React from "react";
import "../App.css";
import BarChart from "../components/BarChart"

function Dashboard() {
    return (
        <div className="App-body">
            Aktivitetslogg
            <BarChart />
        </div>
    );
}

export default Dashboard;
