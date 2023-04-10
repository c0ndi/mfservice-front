import Image from "next/image";
import s from './index.module.scss'
import ArrowIcon from '@/public/icons/arrow.svg'
import {StrapiImageArray} from "@/types/types";
import {PropsWithChildren, useState} from "react";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import CoversSection from "@/components/Motorcycle/CoversSection";

type InfoSection = {
   name: string,
   description: string,
   motorcycleParameters: { name: string, parameter: string } [],
   covers: { data: StrapiImageArray [] },
}

export default function InfoSection({content}: PropsWithChildren<{ content: InfoSection }>) {
   const {name, description, motorcycleParameters, covers} = content;

   const [index, setIndex] = useState(0);
   const [currentCover, setCurrentCover] = useState<string>(getSimpleImageUriArray(covers.data[0]));

   let splitName = name.split(' ');
   let coloredWords = ["Harley-Davidson"];
   if (splitName.includes("Harley-Davidson")) {
      coloredWords = splitName.filter(word => word.includes("Harley-Davidson"))

      splitName = splitName.filter(word => !word.includes("Harley-Davidson"))
   }

   function handleNextCover() {
      if (index < covers.data.length - 1) {
         setIndex(index + 1);
         setCurrentCover(getSimpleImageUriArray(covers.data[index]))

         return;
      }

      setIndex(0);
      setCurrentCover(getSimpleImageUriArray(covers.data[index]))
   }

   function handlePrevCover() {
      if (index > 0) {
         setIndex(index - 1);
         setCurrentCover(getSimpleImageUriArray(covers.data[index]))

         return;
      }

      setIndex(covers.data.length - 1);
      setCurrentCover(getSimpleImageUriArray(covers.data[index]))
   }

   return (
      <div className={s.wrapper}>
         <div className={s.topWrapper}>
            <div className={s.imageWrapper}>
               <Image
                  src={currentCover}
                  fill
                  alt={name}
                  className={s.image}
               />

               <Image
                  src={ArrowIcon}
                  alt={"Arrow-Prev"}
                  className={s.arrowPrev}
                  onClick={handlePrevCover}
               />

               <Image
                  src={ArrowIcon}
                  alt={"Arrow-Next"}
                  className={s.arrowNext}
                  onClick={handleNextCover}
               />
            </div>

            <div className={s.mobileCovers}>
               <CoversSection
                  covers={covers}
                  setCurrentCover={setCurrentCover}
               />
            </div>

            <div className={s.infoWrapper}>
               <h2 className={s.name}>
                  {coloredWords[0].toUpperCase()}
                  &nbsp;
                  <span>
                     {splitName.join(" ").toUpperCase()}
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
         <div className={s.bottomWrapper}>
            <CoversSection
               covers={covers}
               setCurrentCover={setCurrentCover}
            />
         </div>
      </div>
   )
}