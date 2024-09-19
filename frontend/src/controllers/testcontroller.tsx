// src/apiService.js

import axios from "axios";

const API_URL = "http://localhost:8080";

const testService = {
  getData: async () => {
    try {
      const response = await axios.get(`${API_URL}/test`);
      console.log("Success");
      console.log("Type", typeof response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default testService;
