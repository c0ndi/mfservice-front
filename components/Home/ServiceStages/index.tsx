import {PropsWithChildren} from "react";
import {StrapiImage} from "@/types/types";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Image from "next/image";
import s from './index.module.scss';
import Heading from "@/components/Shared/Heading";

type SingleStage = {
   title: string;
   description: string;
   icon: StrapiImage;
}

type ServiceStages = {
   heading: string;
   singleStages: SingleStage [];
}

function SingleStage({content}: PropsWithChildren<{ content: SingleStage }>) {
   const {title, description, icon} = content;
   return (
      <div className={s.singleStageWrapper}>
         <div className={s.imageWrapper}>
            <Image
               src={getSimpleImageUri(icon)}
               alt={title}
               width={icon.data.attributes.width}
               height={icon.data.attributes.height}
            />
         </div>

         <p className={s.title}>{title}</p>
         <p className={s.desc}>{description}</p>
      </div>
   )
}

export default function ServiceStages({content}: PropsWithChildren<{ content: ServiceStages }>) {
   const {heading, singleStages} = content;
   return (
      <div className={s.wrapper}>
         <Heading
            heading={heading}
            size={"md"}
         />

         <div className={s.stagesWrapper}>
            {singleStages.map((stage, index) => <SingleStage
               content={stage}
               key={index}
            />)}
         </div>
      </div>
   )
}