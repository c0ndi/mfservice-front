import s from './index.module.scss';
import {PropsWithChildren} from "react";
import {StrapiImageArray} from "@/types/types";
import Heading from "@/components/Shared/Heading";
import Image from "next/image";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";
import RichText from "@/components/Shared/RichText";

type History = {
   heading: string,
   description: string,
   covers: {data: StrapiImageArray []},
}

export default function History({content}: PropsWithChildren<{content: History}>) {
   const {heading, description, covers} = content
   return (
      // @ts-ignore
      <section className={s.wrapper} name={"historia"}>
         <div className={s.contentWrapper}>
            <div className={s.headingWrapperDesktop}>
               <Heading heading={heading} size={"lg"}/>
            </div>
            <RichText desc={description}/>
         </div>

         <div className={s.headingWrapper}>
            <Heading heading={heading} size={"lg"}/>
         </div>
         <div className={s.imageWrapper}>
            <div className={s.firstContainer}>
               <Image src={getSimpleImageUriArray(covers.data[0])} alt={"First-photo"} fill/>
            </div>
            <div className={s.secondContainer}>
               <Image src={getSimpleImageUriArray(covers.data[1])} alt={"Second-photo"} fill/>
            </div>
            <div className={s.thirdContainer}>
               <Image src={getSimpleImageUriArray(covers.data[2])} alt={"Third-photo"} fill/>
            </div>
            <div className={s.fourthContainer}>
               <Image src={getSimpleImageUriArray(covers.data[3])} alt={"Fourth-photo"} fill/>
            </div>
         </div>
      </section>
   )
}