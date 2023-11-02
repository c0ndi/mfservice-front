import { useEffect, useState } from "react";

export const useLoading = (isLoading: boolean, time?: number) => {
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (!isLoading) {
            setLoading(false);
         }
      }, time ?? 1000);

      () => clearTimeout(timeout);
   }, [isLoading])

   return loading;
}