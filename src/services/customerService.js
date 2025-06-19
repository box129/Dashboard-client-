import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const customerService = {
  // Get all customers
  getAllCustomers: async (page = 1, limit = 7) => {
    const response = await axios.get(`${API_BASE_URL}/customers?page=${page}&limit=${limit}`);
    return response.data;
  },

};

export default customerService;