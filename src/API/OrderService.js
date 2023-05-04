import axios from "axios";

const domain = 'https://artcalibridrfbackend-production.up.railway.app';

export default class OrderService {

   static async getLidSale(limit = 5) {
      const response = await axios.get(`${domain}/api/v1/order/`, {
         params: {
            get_lid_sale: true,
            limit: limit
         }
      });
      return response
   }
}
