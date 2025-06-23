import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const TransactionService = {
  // to get transactions
  getAllTransactions: async (page, limit) => {
    const response = await axios.get(`${API_BASE_URL}/transactions/?page=${page}&limit=${limit}`);
    return response.data;
  },
};

export default TransactionService;