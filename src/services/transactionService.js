import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const transactionService = {
  // to get transactions
  getAllTransactions: async (page = 1, limit = 7) => {
    const response = await axios.get(`${API_BASE_URL}/transactions?page=${page}&limit=${limit}`);
    return response.data;
  },
};

export default transactionService;