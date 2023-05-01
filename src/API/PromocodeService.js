import axios from "axios";

export default class PromocodeService {

   static async getPtomocodeByName(value) {
      const response = await axios.get(`http://localhost:8000/api/v1/promocode/`, {
         params: {
            query: value
         }
      });
      return response
   }
}
