import { useEffect, useState } from "react";
import Image from "next/image";

type CustomImage = {
   alt: string,
   src: string,
   fill?: boolean,
   priority?: boolean,
   sizes?: string,
   quality?: number,
}

export default function CustomImage({ alt, ...props }: CustomImage) {
   const [src, setSrc] = useState(props.src);

   return (
      <Image
         {...props}
         src={src}
         alt={alt}
         onError={() => setSrc('/error-screen.svg')}
         placeholder="blur"
         loading="lazy"
         blurDataURL="/loading-screen.png"
      />
   );
}