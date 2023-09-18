import {PropsWithChildren} from "react";
import {StrapiImage} from "@/types/types";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import Image from "next/image";
import s from './index.module.scss';
import Heading from "@/components/Shared/Heading";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination} from "swiper";


type SingleStage = {
   title: string;
   description: string;
   icon: StrapiImage;
}

type ServiceStages = {
   heading: string;
   singleStages: SingleStage [];
}

function SingleStage({content, index}: PropsWithChildren<{ content: SingleStage, index: number }>) {
   const {title, description, icon} = content;
   return (
      <div className={s.singleStageWrapper}>
         <p className={s.index}>
            0
            <span>
               {index + 1}
            </span>
         </p>
         <div className={s.imageWrapper}>
            <Image
               src={getSimpleImageUri(icon)}
               alt={title}
               width={100}
               height={100}
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
      // @ts-ignore
      <section className={s.wrapper} name={"obsługa"}>
         <Heading
            heading={heading}
            size={"md"}
         />

         <div className={s.stagesWrapper}>
            {singleStages.map((stage, index) =>
               <SingleStage
                  index={index}
                  content={stage}
                  key={index}
               />
            )}
         </div>

         <div className={s.slider}>
            <Swiper
               spaceBetween={50}
               slidesPerView={1}
               modules={[Pagination]}
               pagination={{clickable: true}}
            >
               {singleStages.map((stage, index) => (
                  <SwiperSlide key={index}>
                     <SingleStage
                        content={stage}
                        index={index}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}