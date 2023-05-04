import axios from "axios";

const domain = 'https://artcalibridrfbackend-production.up.railway.app';

export default class CategoryService {

   static async getCategory(limit=false, get_photo=true) {
      const response = await axios.get(`${domain}/api/v1/category/`, {
         params: {
            limit: limit,
            get_photo: get_photo
         }
      });
      return response
   }
}
