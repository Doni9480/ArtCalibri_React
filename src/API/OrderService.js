import axios from "axios";

export default class OrderService {

   static async getLidSale(limit = 5) {
      const response = await axios.get(`http://localhost:8000/api/v1/order/`, {
         params: {
            get_lid_sale: true,
            limit: limit
         }
      });
      return response
   }
}
