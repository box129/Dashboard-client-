import React, { useState, useEffect } from 'react';
import transactionService from '../services/transactionService';

const TransactionCustomers = () => {
  const [ transCustomers, setTransCustomers ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchTransCustomers();
  }, []);

  const fetchTransCustomers = async () => {
    try{
      setLoading(true);
      const response = await transactionService.getAllTransactions();

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return(
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>RSA Pin</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Payment</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transCustomers.map(transCustomer => (
            <tr key={transCustomer.id}> 
              <td>{transCustomer.name}</td>
              <td>{transCustomer.rsaPin}</td>
              <td>{transCustomer.email}</td>
              <td>{transCustomer.phoneNumber}</td>
              <td>{transCustomer.payment}</td>
              <td>{transCustomer.date}</td>
              <td>{transCustomer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default TransactionCustomers;