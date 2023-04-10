import s from './index.module.scss';

import {StrapiImage} from "@/types/types";
import {PropsWithChildren} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";

import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Shared/Heading";
import CustomImage from "@/components/Shared/CustomImage";

type Hero = {
   heading: string;
   description: string;
   buttonLink: string;
   buttonLabel: string;
   cover: StrapiImage;
}

export default function Hero({content}: PropsWithChildren<{ content: Hero }>) {
   const {heading, description, buttonLink, buttonLabel, cover} = content;
   return (
      // @ts-ignore
      <section className={s.wrapper}>
         <div className={s.contentWrapper}>
            <Heading
               heading={heading}
               size={"lg"}
            />
            <p className={s.desc}>{description}</p>

            <Link href={buttonLink}>
               <button className={s.button}>
                  {buttonLabel}
               </button>
            </Link>
         </div>

         <div className={s.imageWrapper}>
            {/*<Image*/}
            {/*   src={getSimpleImageUri(cover)}*/}
            {/*   alt={"Motorcycle image"}*/}
            {/*   fill*/}
            {/*/>*/}
            <CustomImage
               alt={"MotorcycleImage"}
               src={getSimpleImageUri(cover)}
               fill
               priority
            />
         </div>
      </section>
   )
}