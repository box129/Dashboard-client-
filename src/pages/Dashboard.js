import React, { useState, useEffect } from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import ActivitySummary from '../components/dashboard/ActivitySummary';
import CustomerProgress from '../components/dashboard/CustomerProgress';
import TransactionChart from '../components/dashboard/TransactionChart';
import DataTable from '../components/common/DataTable';
import '../styles/components/dashboard.css';

const Dashboard = () => {
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    totalCustomers: 0,
    totalTransactions: 0,
    totalRevenue: 0,
    activeCustomers: 0
  });

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulate API call for dashboard stats
    setDashboardStats({
      totalCustomers: 1250,
      totalTransactions: 8400,
      totalRevenue: 2840000,
      activeCustomers: 890
    });

    // Simulate API call for recent transactions
    setRecentTransactions([
      {
        id: 'TXN001',
        customer: 'John Doe',
        amount: 15000,
        type: 'Credit',
        date: '2024-06-18',
        status: 'Completed'
      },
      {
        id: 'TXN002',
        customer: 'Jane Smith',
        amount: 8500,
        type: 'Debit',
        date: '2024-06-18',
        status: 'Pending'
      },
      {
        id: 'TXN003',
        customer: 'Mike Johnson',
        amount: 25000,
        type: 'Credit',
        date: '2024-06-17',
        status: 'Completed'
      },
      {
        id: 'TXN004',
        customer: 'Sarah Wilson',
        amount: 12000,
        type: 'Credit',
        date: '2024-06-17',
        status: 'Failed'
      },
      {
        id: 'TXN005',
        customer: 'David Brown',
        amount: 5500,
        type: 'Debit',
        date: '2024-06-16',
        status: 'Completed'
      }
    ]);
  }, []);

  // Define columns for the recent transactions table
  const transactionColumns = [
    {
      key: 'id',
      header: 'Transaction ID',
      render: (row) => (
        <span className="font-medium text-blue-600">{row.id}</span>
      )
    },
    {
      key: 'customer',
      header: 'Customer',
      render: (row) => (
        <span className="font-medium">{row.customer}</span>
      )
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (row) => (
        <span className={`font-semibold ${
          row.type === 'Credit' ? 'text-green-600' : 'text-red-600'
        }`}>
          {row.type === 'Credit' ? '+' : '-'}₦{row.amount.toLocaleString()}
        </span>
      )
    },
    {
      key: 'date',
      header: 'Date',
      render: (row) => (
        <span className="text-gray-600">
          {new Date(row.date).toLocaleDateString()}
        </span>
      )
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === 'Completed' 
            ? 'bg-green-100 text-green-800'
            : row.status === 'Pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {row.status}
        </span>
      )
    }
  ];

  const handleRowAction = (row) => {
    console.log('Action clicked for:', row);
    // Add logic for row actions (view details, edit, etc.)
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        {/* Stats Section */}
        <div className="stats-section">
          <DashboardStats stats={dashboardStats} />
        </div>

        <div className="charts-section">
          {/* Recent Transactions Table */}
          <div className="table-section">
            <div className="section-header">
              <h3>Recent Transactions</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <DataTable
              columns={transactionColumns}
              data={recentTransactions}
              onRowAction={handleRowAction}
            />
          </div>

          {/* Customer Progress Section */}
          <div className="progress-section">
            <CustomerProgress />
          </div>

        </div>

        {/* Charts and Activity Section */}
        <div className="charts-section">
          <div className="activity-container">
            <ActivitySummary />
          </div>

          <div className="chart-container">
            <TransactionChart />
          </div>

        </div>




      </div>
    </div>
  );
};

export default Dashboard;