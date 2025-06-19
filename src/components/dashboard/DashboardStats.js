import React from 'react';
import { Users, CheckCircle, Clock, CreditCard } from 'lucide-react';
import './DashboardStats.css';

const DashboardStats = ({ stats }) => {
  const statItems = [
    {
      title: 'Total Customers',
      value: stats?.totalCustomers || 500,
      icon: Users,
      className: 'stat-orange'
    },
    {
      title: 'Completed Forms',
      value: stats?.completedForms || 322,
      icon: CheckCircle,
      className: 'stat-green'
    },
    {
      title: 'Uncompleted Forms',
      value: stats?.uncompletedForms || 178,
      icon: Clock,
      className: 'stat-red'
    },
    {
      title: 'Transaction',
      value: `₦${stats?.transactions || 500}`,
      icon: CreditCard,
      className: 'stat-purple'
    },
  ];

  return (
    <div className="stats-grid">
      {statItems.map((item, index) => (
        <div key={index} className={`stat-card ${item.className}`}>
          <div className="stat-content">
            <div className="stat-text">
              <p className="stat-title">{item.title}</p>
              <p className="start-value">{item.value}</p>
            </div>
            <div className="stat-icon">
              <item.icon size={24}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default DashboardStats;