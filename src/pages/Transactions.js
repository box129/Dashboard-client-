import React, { useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import TransactionService from '../services/TransactionService';
import TransactionList from '../components/transactions/TransactionList';

const Transactions = () => {
  const [ transCustomers, setTransCustomers ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const [page, setPage] = useState(1);
  const totalPages = 10;
  const currentPage = page;

  useEffect(() => {
    const fetchTransactions = async () => {
      try{
        setLoading(true);
        const response = await TransactionService.getAllTransactions(page, 7);
  
        if (response.success) {
          setTransCustomers(response.data);
        } else {
          setError('Failed to fetch transactions customers');
        }
      } catch (err) { 
        setError('Error fetching transactions customers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTransactions();
  }, [page]);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const transactionColumns = [
    {
      key: 'name',
      header: 'Name',
      render: (row) => (
        <span>{row.name}</span>
      )
    },
    {
      key: 'email',
      header: 'Email',
      render: (row) => (
        <span>{row.email}</span>
      )
    },
    {
      key: 'phoneNumber',
      header: 'Phone Number',
      render: (row) => (
        <span>{row.phoneNumber}</span>
      )
    },
    {
      key: 'payment',
      header: 'Payment',
      render: (row) => (
        <span>{row.payment}</span>
      )
    },
    {
      key: 'date',
      header: 'Date',
      render: (row) => (
        <span>{row.date}</span>
      )
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <span
      style={{
        backgroundColor: row.status === 'Successful' ? '#d1fae5' : '#fee2e2',
        color: row.status === 'Successful' ? '#065f46' : '#991b1b',
        padding: '10px 12px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: 500
      }}
    >
      {row.status}
    </span>
      )
    }
  ];

  const handleRowAction = (row) => {
    console.log('Action clicked for:', row);
    // Add logic to view deatils of the customer
  };

  const onNext = () => {
    return setPage(page + 1);
  };

  const onPrevious = () => {
    return setPage(page - 1);
  }

  return(
    <div>
      <h2 className="header-title">Transactions</h2>

      {/* search, filter and the other buttons */}
      <div>
        <SearchBar>
          <button className="action-btn" style={{
            position: 'relative',
            right: '180px',
            backgroundColor: 'rgba(198, 198, 198, 0.30)'
          }}>
            Filter <SlidersHorizontal size={16} className="btn-icon" />
          </button>
        </SearchBar>
      </div>

      <div>
        {/* Transaction Table */}
        <div className="customer-list-container">
          <TransactionList 
            columns={transactionColumns}
            data={transCustomers}
            onRowAction={handleRowAction}
          />
          <div className="pagination-container">
            <p className="pagination-info">Showing page {currentPage} of {totalPages}</p>
            <div className="pagination-buttons">
              <button onClick={onPrevious} disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={onNext} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;