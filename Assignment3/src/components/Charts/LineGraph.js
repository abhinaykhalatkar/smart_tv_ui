import React from "react";
import "./Charts.css";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
import { energyData } from "../../DummyData";
const LineGraph = ({ title, datakey }) => {
    return (
        <div className="charts">
            <h4>{title}</h4>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <AreaChart data={energyData}>
                    <XAxis dataKey="month" stroke="#a1a1a1" />
                    <YAxis dataKey={datakey} stroke="#a1a1a1" />

                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#f7cd27" fill="#f8f3df" />
                    <CartesianGrid stroke="#e0dfdf" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraph