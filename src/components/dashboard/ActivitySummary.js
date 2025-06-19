import React from 'react';

const ActivitySummary = ({ activities }) => {
  const defaultActivities = [
    { user: 'Aishat Ibru', action: 'made payments', time: '9:35 am' },
    { user: 'Niyi Abiola', action: 'completed the form', time: '9:38 am' },
    { user: 'Sandra Omidina', action: 'submitted the form', time: '9:50 am' },
    { user: 'Ojo Bunmi', action: 'made payments', time: '9:58 am' },
  ];

  const activityList = activities || defaultActivities;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Activity Summary Today</h3>

      <div classname="space-y-4">
        {activityList.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySummary;