import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import './TransactionChart.css'; // Import the CSS file

const TransactionChart = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState('2023');
  
  const chartData = data || [
    { month: 'Jan', amount: 400 },
    { month: 'Feb', amount: 600 },
    { month: 'Mar', amount: 800 },
    { month: 'Apr', amount: 900 },
    { month: 'May', amount: 1000 },
  ];

  // Custom tooltip styles
  const tooltipStyles = {
    backgroundColor: '#2d3748',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    fontSize: '14px',
  };

  // Custom tick styles
  const tickStyles = {
    fontSize: 12,
    fill: '#a0aec0',
  };

  return (
    <div className="transaction-chart-container">
      {/* Header */}
      <div className="chart-header">
        <h3 className="chart-title">Daily Transactions</h3>
        <select 
          className="year-selector"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      {/* Chart */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barCategoryGap="25%"
          >
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#f7fafc" 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={tickStyles}
              dy={5}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={tickStyles}
              tickFormatter={(value) => `₦${value}`}
              domain={[0, 1200]}
              ticks={[0, 200, 400, 600, 800, 1000, 1200]}
            />
            {/* <Tooltip 
              formatter={(value) => [`₦${value}`, 'Amount']}
              labelStyle={{ color: '#2d3748' }}
              contentStyle={tooltipStyles}
            /> */}
            <Bar 
              dataKey="amount" 
              fill="#48bb78"
              radius={[3, 3, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;