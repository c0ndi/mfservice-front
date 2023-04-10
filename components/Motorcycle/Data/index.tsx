import {PropsWithChildren, useState} from "react";
import {StrapiImageArray} from "@/types/types";
import s from './index.module.scss'
import InfoSection from "@/components/Motorcycle/InfoSection";
import CoversSection from "@/components/Motorcycle/CoversSection";

type Data = {
   name: string,
   description: string,
   motorcycleParameters: {name: string, parameter: string} [],
   covers: {data: StrapiImageArray []},
}

export default function Data({content}: PropsWithChildren<{content: Data}>) {
   const {name, description, motorcycleParameters, covers} = content
   console.log(covers.data[0].attributes.url)
   const [currentCover, setCurrentCover] = useState<string>(covers.data[0].attributes.url);


   const infoSectionContent = {
      name, description, motorcycleParameters, currentCover
   }

   return (
      <div className={s.wrapper}>
         <InfoSection content={infoSectionContent}/>
         <CoversSection covers={covers}/>
      </div>
   )
}