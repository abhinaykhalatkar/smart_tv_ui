import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Netflix', value: 2 },
    { name: 'Playstation', value: 1 },
    { name: 'Xbox', value: 0.5 },
    { name: 'Prime', value: 1.5 },
    { name: 'YouTube', value: 2.5 },
    { name: 'Disney', value: 0.5 },
    // Add more data for other activities
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff9c2a', '#ff5f5f', '#8dd1e1'];

const PieChartComponent = () => {
    return (
        <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
