import React from "react";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import "../App.css";

function BarChart() {
    useEffect(() => {
        let dataSet = [
            { subject: "Mandag", count: 150 },
            { subject: "Tirsdag", count: 75 },
            { subject: "Onsdag", count: 240 },
            { subject: "Torsdag", count: 135 },
            { subject: "Fredag", count: 240 }
        ];
        const getMax = () => {
            let max = 0;
            dataSet.forEach((dt) => {
                if (dt.count > max) {
                    max = dt.count;
                }
            });
            return max;
        };

        d3.select("#BarChart")
            .selectAll("div")
            .data(dataSet)
            .enter()
            .append("div")
            .classed("bar", true)
            .style("height", `${getMax()}px`);

        d3.select("#BarChart")
            .selectAll(".bar")
            .transition()
            .duration(1000)
            .style("height", (bar) => `${bar.count}px`)
            .style("width", "80px")
            .style("margin-right", "10px")
            .delay(300);
    }, []);

    return (
        <div className="App">
            <div id="pgraphs"></div>
            <div id="BarChart"></div>
        </div>
    );
}

export default BarChart;
