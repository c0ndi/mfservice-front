import {PropsWithChildren} from "react";
import s from './index.module.scss'
import {StrapiImageArray} from "@/types/types";
import Image from "next/image";
import {strapiURL} from "@/config/axios";

type InfoSection = {
   name: string,
   description: string,
   motorcycleParameters: { name: string, parameter: string } [],
   currentCover: string;
}

export default function InfoSection({content}: PropsWithChildren<{ content: InfoSection }>) {
   const {name, description, motorcycleParameters, currentCover} = content;
   let splittedName = name.split(' ');

   let coloredWords = ["Harley-Davidson"];
   if (splittedName.includes("Harley-Davidson")) {
      coloredWords = splittedName.filter(word => word.includes("Harley-Davidson"))

      splittedName = splittedName.filter(word => !word.includes("Harley-Davidson"))
   }

   return (
      <div className={s.wrapper}>
         <div className={s.imageWrapper}>
            <Image src={strapiURL + currentCover} alt={name} fill/>
         </div>

         <div className={s.infoWrapper}>
            <h2 className={s.name}>
               {coloredWords[0].toUpperCase()}
               &nbsp;
               <span>
               {splittedName.join(" ").toUpperCase()}
            </span>
            </h2>

            <p className={s.desc}>{description}</p>

            <ul className={s.parameters}>
               {motorcycleParameters.map(({name, parameter}, key) => {
                  return (
                     <li key={key}>
                        <span>{name.toUpperCase()}: </span>
                        <span>{parameter.toUpperCase()}</span>
                     </li>
                  )
               })}
            </ul>
         </div>
      </div>
   )
}