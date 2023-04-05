import {PropsWithChildren} from "react";
import {StrapiImage} from "@/types/types";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Image from "next/image";
import s from './index.module.scss';
import HeadingMd from "@/components/Shared/HeadingMd";

type SingleStage = {
   title: string;
   description: string;
   icon: StrapiImage;
}

type ServiceStages = {
   heading: string;
   singleStages: SingleStage [];
}

function SingleStage({content}: PropsWithChildren<{ content: SingleStage}>) {
   const {title, description, icon} = content;
   return (
      <div className={s.singleStageWrapper}>
         <Image
            src={getSimpleImageUri(icon)}
            alt={title}
            width={100}
            height={75}
         />
         <p>{title}</p>
         <p>{description}</p>
      </div>
   )
}

export default function ServiceStages({content}: PropsWithChildren<{ content: ServiceStages }>) {
   const {heading, singleStages} = content;
   return (
      <div className={s.wrapper}>
         <HeadingMd heading={heading}/>

         <div className={s.stagesWrapper}>
            {singleStages.map((stage, index) => <SingleStage content={stage} key={index}/>)}
         </div>
      </div>
   )
}