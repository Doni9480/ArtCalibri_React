import axios from "axios";

const domain = 'https://artcalibridrfbackend-production.up.railway.app';

export default class ProductService {

   static async getPromotions(limit = 5) {
      const response = await axios.get(`${domain}/api/v1/products/`, {
         params: {
            get_action: true,
            limit: limit
         }
      });
      return response
   }

   static async getProductBySearch(text = '') {
      const response = await axios.get(`${domain}/api/v1/products/`, {
         params: {
            search_text: text,
            search_mod: true
         }
      });
      return response
   }

   static async getProductsById(listId) {
      const response = await axios.get(`${domain}/api/v1/products/`, {
         params: {
            product: listId,
         }
      });
      return response
   }

   static async getProductDetails(id) {
      const response = await axios.get(`${domain}/api/v1/products/${id}`);
      return response
   }
}
