export default function DiscountCalculation(activePrice=null, oldPrice=null) {
   const active_p = activePrice ? Math.round(activePrice) : null
   const old_p = oldPrice ? Math.round(oldPrice) : null
   if (active_p && old_p && active_p < old_p){
      const discount = Math.round(((active_p - old_p) / active_p) * 100)
      return [active_p, old_p, discount]
   }
   return [active_p, null, null]
}
