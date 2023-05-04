import axios from "axios";

const domain = 'https://artcalibridrfbackend-production.up.railway.app';

export default class GalleryService {

   static async getPhoto(limit=10) {
      const response = await axios.get(`${domain}/api/v1/gallery/`, {
         params: {
            get_title_photo: true,
            limit: limit,
         }
      });
      return response
   }
}
