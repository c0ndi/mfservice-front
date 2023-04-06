export type StrapiImage = {
   data: {
      attributes: {
         url: string;
         width?: number;
         height?: number;
      }
   }
}

export type StrapiImageArray = {
   attributes: {
      url: string;
   }
}