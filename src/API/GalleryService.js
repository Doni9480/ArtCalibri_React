import axios from "axios";

export default class GalleryService {

   static async getPhoto(limit=10) {
      const response = await axios.get(`http://localhost:8000/api/v1/gallery/`, {
         params: {
            get_title_photo: true,
            limit: limit,
         }
      });
      return response
   }
}
