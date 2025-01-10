import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/customer'; // Thay bằng URL của Spring Boot

// Hàm GET danh sách sản phẩm
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Hàm POST thêm sản phẩm
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
