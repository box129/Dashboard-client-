import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const DashboardService = {
  // get the little dashboard customers
  getAllCustomers: async () => {
    const response = await axios.get(`${API_BASE_URL}/dashboard/stats`);
    return response.data;
  },
};

export default DashboardService;