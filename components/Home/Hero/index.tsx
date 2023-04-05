import s from './index.module.scss';

import {StrapiImage} from "@/types/types";
import {PropsWithChildren} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";

import Link from "next/link";
import Image from "next/image";

type Hero = {
   heading: string;
   description: string;
   buttonLink: string;
   buttonLabel: string;
   cover: StrapiImage;
}

export default function Hero({content}: PropsWithChildren<{ content: Hero }>) {
   const {heading, description, buttonLink, buttonLabel, cover} = content;
   return (
      <div className={s.wrapper}>
         <div className={s.contentWrapper}>
            <h1>{heading}</h1>
            <p className={s.desc}>{description}</p>

            <Link href={buttonLink}>
               <button>
                  {buttonLabel}
               </button>
            </Link>
         </div>

         <div className={s.imageWrapper}>
            <Image
               src={getSimpleImageUri(cover)}
               alt={"Motorcycle image"}
               fill
            />
         </div>
      </div>
   )
}