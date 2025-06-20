import React from 'react';
import { PieChart, Pie, Cell,ResponsiveContainer } from 'recharts';
import './CustomerProgress.css';

const CustomerProgress = ({ data }) => {
  const progressData = [
    {name: 'Completed', value: data?.completed || 322, color: '#10b981'},
    {name: 'Uncompleted', value: data?.uncompleted || 178, color: '#ef4444'},
  ];

  const total = progressData.reduce((sum, item) => sum + item.value, 0);
  const percentage = Math.round((progressData[0].value / total) * 100);

  return (
    <div className="card">
      <h3 className="card-title">Customer Progress</h3>

      <div className="progress-content">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={progressData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                dataKey="value"
              >
                {progressData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color}/>
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center">
              <span className="percentage">{percentage}%</span>
          </div>
        </div>

        
      </div>
      <div className="legend">
          {progressData.map((item, index) => (
            <div key={index} className="legend-item">
              <div
                className="legend-dot"
                style={{background: item.color}}
              />
              <div className="legend-text">
                <p className="legend-label">{item.name}</p>
                <p className="legend-value">{item.value}{`(${index === 0 ? percentage : 100 - percentage}%)`}
                  <span></span>
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CustomerProgress;