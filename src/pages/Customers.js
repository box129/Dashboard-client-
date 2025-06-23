import React, { useState, useEffect } from 'react';
import SearchBar from '../components/common/SearchBar';
import CustomerService from '../services/CustomerService';
import CustomerList from '../components/customers/CustomerList';
import '../styles/components/customer.css';


const Customers = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const currentPage = page;
  const  [customers, setCustomers ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);


  // Mock data - replace with the actual API calls
  useEffect(() => {
    fetchCustomers();
  }, [page]);

  // stimulate the API calls to get customers
  const fetchCustomers = async () => {
    try{
      setLoading(true);
      const response = await CustomerService.getAllCustomers(page, 7);
      if (response.success) {
        setCustomers(response.data);
        // setPage(page + 1);
      } else {
        setError('Failed to fetch customers');
      }
    } catch (err) { 
      setError('Error fetching customers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Setting its Pagination
  

  // Defining the columns for the customer table
  const customerColumns = [
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
      key: 'rsaPin',
      header: 'RSA Pin',
      render: (row) => (
        <span>{row.rsaPin}</span>
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
      <h2 className="header-title">Customer</h2>

      {/* search and other buttons */}
      <div>
        <SearchBar/>
      </div>

      <div>
        {/* Customer Table */}
        <div className="customer-list-container">
          <CustomerList 
            columns={customerColumns}
            data={customers}
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

export default Customers;