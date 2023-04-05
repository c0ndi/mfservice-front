export function transformIndex(index: number) {
   let transformedIndex = "";

   for(let i = 0; i < index; i++) {
      transformedIndex += "I"
   }

   return transformedIndex;
}