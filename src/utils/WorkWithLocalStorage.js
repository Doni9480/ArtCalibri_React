export default class WorkWithLocalStorage {
   static LSHasKeyOrders() {
      const strData = localStorage.getItem('orders');
      if (strData?.length) {
         return JSON.parse(strData)
      } else {
         return [];
      }
   }

   static ordersHasProduct(id) {
      const data = this.getAllOrders();
      if (data?.length) {
         const product = data.find((product) => product.product_id === id)
         if (product) {
            return true
         }
      }
      return false
   }

   static saveNewOrder(id, count = 1, gas = 'air') {
      if (!this.ordersHasProduct(id)) {
         const allList = this.getAllOrders();
         const strData = JSON.stringify([...allList, { product_id: id, count: count, gas: gas }]);
         localStorage.setItem('orders', strData);
         return true
      }
      return false
   }

   static updateOrder(id, count = null, gas = null) {
      if (this.ordersHasProduct(id)) {
         const allList = this.getAllOrders();
         const newList = allList.map((product) => {
            if (product.product_id === id) {
               if (count && product.count !== count) {
                  product.count = count
               }
               if (gas && product.gas !== gas) {
                  product.gas = gas
               }
            }
            return product
         })
         const strData = JSON.stringify(newList);
         localStorage.setItem('orders', strData);
         return newList;
      }
      return false;
   }

   static getAllOrders() {
      return this.LSHasKeyOrders();
   }

   static getProduct(id) {
      const data = this.getAllOrders();
      if (data?.length) {
         const product = data.find((product) => product.product_id === id)
         return product
      }
   }

   static getOnly(val = 'product_id') {
      const getData = this.getAllOrders()
      const newData = getData.map(elem => {
         if (elem[val]) {
            return elem[val];
         }
         return null;
      })
      return newData;
   }

   static removeOrder(id) {
      const allList = this.getAllOrders();
      const newList = allList.filter(element => element.product_id !== id);
      const strData = JSON.stringify(newList);
      localStorage.setItem('orders', strData);
      return newList;
   }
}