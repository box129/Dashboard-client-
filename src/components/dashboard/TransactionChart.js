import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TransactionChart = ({ data }) => {
  const chartData = data || [
    { month: 'Jan', amount: 800 },
    { month: 'Feb', amount: 1200 },
    { month: 'Mar', amount: 900 },
    { month: 'Apr', amount: 1400 },
    { month: 'May', amount: 1100 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Daily Transaction</h3>
        <select className="text-sm boarder-gray-300 rounded px-3 py-1">
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis datakey="month" />
            <YAxis />
            <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;