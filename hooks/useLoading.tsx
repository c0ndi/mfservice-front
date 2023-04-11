import {useEffect, useState} from "react";

export const useLoading = (isLoading: boolean) => {
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if(!isLoading) {
            setLoading(false);
         }
      }, 1000);

      () => clearTimeout(timeout);
   }, [isLoading])

   return loading;
}