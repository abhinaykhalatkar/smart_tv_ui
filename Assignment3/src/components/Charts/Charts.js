import React from "react";
import "./Charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dummydata } from "../../DummyData";

function formatTime(value) {
  const hours = Math.floor(value);
  const minutes = Math.round((value % 1) * 60);

  return `${hours}h ${minutes}m`;
}

function Charts({ title }) {
  return (
    <div className="charts">
      <h4>{title}</h4>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <BarChart data={dummydata}>
          <CartesianGrid stroke="#e0dfdf" />
          <XAxis dataKey="year" stroke="#a1a1a1" />
          <YAxis
            stroke="#a1a1a1"
            label={{
              // value: "Usage (hours)",
              angle: -90,
              position: "insideLeft",
              offset: -10,
            }}
            tickFormatter={formatTime}
          />
          <Tooltip
            formatter={formatTime}
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
          />
          {Object.keys(dummydata[0])
            .filter((key) => key !== "year")
            .map((key, index) => (
              <Bar key={index} dataKey={key} fill="#f7cd27" />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
