import { PropsWithChildren } from "react";
import {StrapiImageArray} from "@/types/types";
import InfoSection from "@/components/Motorcycle/InfoSection";

type Data = {
   name: string,
   description: string,
   motorcycleParameters: { name: string, parameter: string } [],
   covers: { data: StrapiImageArray [] },
}

export default function Data({content}: PropsWithChildren<{ content: Data }>) {
   const {name, description, motorcycleParameters, covers} = content

   const infoSectionContent = {
      name, description, motorcycleParameters, covers
   }

   return (
      <InfoSection content={infoSectionContent}/>
   )
}