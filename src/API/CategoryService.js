import axios from "axios";

export default class CategoryService {

   static async getCategory(limit=false, get_photo=true) {
      const response = await axios.get(`http://localhost:8000/api/v1/category/`, {
         params: {
            limit: limit,
            get_photo: get_photo
         }
      });
      return response
   }
}
