import { PropsWithChildren } from "react";
import { StrapiImageArray } from "@/types/types";
import Image from "next/image";
import { getSimpleImageUriArray } from "@/utils/getSimpleImageUriArray";
import s from './index.module.scss'
import { Motorcycle } from "@/components/Motorcycles/Motorcycles";
import Link from "next/link";

export default function MotorcycleContainer({ content }: PropsWithChildren<{ content: Motorcycle }>) {
   const { name, motorcycleParameters, covers, slug } = content.attributes;
   return (
      <Link href={`/motocykle/${slug}`}>
         <div className={s.wrapper}>
            <div className={s.hoverContainer}>
               <div>
                  <p>Zobacz więcej</p>
               </div>
            </div>

            <div className={s.imageWrapper}>
               <Image
                  src={getSimpleImageUriArray(covers.data[0])}
                  alt={name}
                  fill
                  quality={50}
                  placeholder="blur"
                  blurDataURL="/loading-screen.png"
               // sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'
               />
            </div>

            <p className={s.name}>{name}</p>

            <ul className={s.parameters}>
               {motorcycleParameters.map((parameter, index) => {
                  if (index < 3) {
                     return (
                        <li key={index}>{parameter.name}: <span>{parameter.parameter}</span></li>
                     )
                  }
               })}
            </ul>
         </div>
      </Link>
   )
}