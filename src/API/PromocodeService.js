import axios from "axios";

const domain = 'https://artcalibridrfbackend-production.up.railway.app';

export default class PromocodeService {

   static async getPtomocodeByName(value) {
      const response = await axios.get(`${domain}/api/v1/promocode/`, {
         params: {
            query: value
         }
      });
      return response
   }
}
