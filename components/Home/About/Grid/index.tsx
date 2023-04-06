import s from './index.module.scss'
import {StrapiImageArray} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";

type Grid = {
   covers: { data: StrapiImageArray [] };
}

export default function Grid({covers}: Grid) {
   const {data} = covers;
   return (
      <div className={s.wrapper}>
         <div className={s.topContainer}>
            <div className={`${s.photoContainer} ${s.firstContainer}`}>
               <Image
                  src={getSimpleImageUriArray(data[0])}
                  alt={"First-Image"}
                  fill
               />
            </div>

            <div className={`${s.photoContainer} ${s.secondContainer}`}>
               <Image
                  src={getSimpleImageUriArray(data[1])}
                  alt={"Second-Image"}
                  fill
               />
            </div>
         </div>

         <div className={s.bottomContainer}>
            <div className={`${s.photoContainer} ${s.thirdContainer}`}>
               <Image
                  src={getSimpleImageUriArray(data[2])}
                  alt={"Third-Image"}
                  fill
               />
            </div>

            <div className={`${s.photoContainer} ${s.fourthContainer}`}>
               <Image
                  src={getSimpleImageUriArray(data[2])}
                  alt={"Fourth-Image"}
                  fill
               />
            </div>
         </div>
      </div>
   )
}