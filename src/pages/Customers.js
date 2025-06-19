import React, { useState, useEffect } from 'react';
import customerService from '../services/customerService.js';

const Customers = () => {
  const  [customers, setCustomers ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try{
      setLoading(true);
      const response = await customerService.getAllCustomers();

      if (response.success) {
        setCustomers(response.data);
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

  return(
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>RSA Pin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}> 
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.rsaPin}</td>
              <td>
                <button /*onClick={() => handleEdit(customer.id)}*/>Edit</button>
                <button /*onClick={() => handleDelete(customer.id)}*/>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Customers;