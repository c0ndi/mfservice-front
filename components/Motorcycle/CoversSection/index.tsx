import {StrapiImageArray} from "@/types/types";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import s from './index.module.scss'
import CustomImage from "@/components/Shared/CustomImage";

type CoversSection = {
   covers: { data: StrapiImageArray[] },
   setCurrentCover: (cover: string) => void,
}

export default function CoversSection({covers, setCurrentCover}: CoversSection) {
   return (
      <div className={s.wrapper}>
         {covers.data.map((cover, key) => {
            return (
               <div
                  key={key}
                  className={s.coversWrapper}
                  onClick={() => setCurrentCover(getSimpleImageUriArray(cover))}
               >
                  <CustomImage
                     src={getSimpleImageUriArray(cover)}
                     alt={`cover-${key}`}
                     fill
                     sizes="(max-width: 768px) 100vw"
                     priority
                     quality={25}
                  />
               </div>
            )
         })}
      </div>
   )
}