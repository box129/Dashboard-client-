import React, { useState, useEffect } from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import ActivitySummary from '../components/dashboard/ActivitySummary';
import CustomerProgress from '../components/dashboard/CustomerProgress';
import TransactionChart from '../components/dashboard/TransactionChart';
import CustomerList from '../components/dashboard/CustomerList';
import DashboardService from '../services/DashboardService';
import '../styles/components/dashboard.css';

const Dashboard = () => {
  const [recentCustomers, setRecentCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

    // Simulate API call for recent customers
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const {data} = await DashboardService.getAllCustomers();
        setRecentCustomers(data);
        console.log("DATA RECEIVED:", data);
      } catch (err) {
        setError('Failed to load customers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  // Define columns for the recent customers table
  const customerColumns = [
    {
      key: 'name',
      header: 'Name',
      render: (row) => (
        <span className="customer-name">{row.name}</span>
      )
    },
    {
      key: 'email',
      header: 'Email',
      render: (row) => (
        <span className="customer-email">{row.email}</span>
      )
    },
    {
      key: 'phoneNumber',
      header: 'Phone Number',
      render: (row) => (
        <span className="customer-phone">{row.phoneNumber}</span>
      )
    },
    {
      key: 'rsaPin',
      header: 'RSA Pin',
      render: (row) => (
        <span className="customer-rsa">{row.rsaPin}</span>
      )
    }
  ];

  const handleRowAction = (row) => {
    console.log('Action clicked for:', row);
    // Add logic for row actions (view details, edit, etc.)
  };

  return (
    <div className="dashboard-container">
      <h2 className="header-title">Your Dashboard Today</h2>

      {/* Stats Section */}
      <div className="stats-section">
        <DashboardStats stats={dashboardStats} />
      </div>

      <div className="charts-section">
        {/* Recent Customers Table */}
        <div className="table-section">
          <div className="section-header">
            <h3>Customer List</h3>
          </div>
          <CustomerList
            columns={customerColumns}
            data={recentCustomers}
            onRowAction={handleRowAction}
          />
        </div>

        {/* Customer Progress Section */}
        <div className="progress-section">
          <div>
            <CustomerProgress />
          </div>
          
        </div>
      </div>

      {/* Charts and Activity Section */}
      <div className="charts-section">
        <div>
          <ActivitySummary />
        </div>

        <div>
          <TransactionChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;