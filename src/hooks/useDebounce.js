import { useRef, useCallback } from "react";

export default function useDebounce (callback, delay) {
   const timer = useRef(null);

   const debounceCallback = useCallback((...args) => {
      if (timer.current) {
         clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
         callback(...args)
      }, delay)
   }, [callback, delay])
   return debounceCallback;
}