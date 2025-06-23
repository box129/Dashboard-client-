import React from 'react';
import './ActivitySummary.css'; // Import the CSS file

const ActivitySummary = ({ activities }) => {
  const defaultActivities = [
    { user: 'Aishat Ibru', action: 'made payments', time: '9:35 am' },
    { user: 'Niyi Abiola', action: 'completed the form', time: '9:38 am' },
    { user: 'Sandra Omidina', action: 'submitted the form', time: '9:50 am' },
    { user: 'Ojo Bunmi', action: 'made payments', time: '9:58 am' },
  ];

  const activityList = activities || defaultActivities;

  return (
    <div className="activity-summary">
      <h3>Activity Summary Today</h3>

      <div className="activity-list">
        {activityList.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <span className="activity-user">{activity.user}</span> {activity.action}
            </div>
            <span className="activity-time">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySummary;