import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const CustomerService = {
  // Get all customers
  getAllCustomers: async (page, limit) => {
    const response = await axios.get(`${API_BASE_URL}/customers/?page=${page}&limit=${limit}`);
    return response.data;
  },

};

export default CustomerService;