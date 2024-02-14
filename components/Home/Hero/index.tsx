import s from './index.module.scss';

import { StrapiImage, StrapiImageArray } from "@/types/types";
import { PropsWithChildren } from "react";
import { getSimpleImageUri } from "@/utils/getSimpleImageUri";

import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Shared/Heading";
import CustomImage from "@/components/Shared/CustomImage";

import useEmblaCarousel from 'embla-carousel-react'
import { getSimpleImageUriArray } from '@/utils/getSimpleImageUriArray';

export type HeroType = {
   heading: string;
   description: string;
   buttonLink: string;
   buttonLabel: string;
   covers: { data: StrapiImageArray[] };
}

export default function Hero({ content }: PropsWithChildren<{ content: HeroType }>) {
   const { heading, description, buttonLink, buttonLabel, covers } = content;

   const [emblaRef] = useEmblaCarousel()

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
            <div className="embla" ref={emblaRef}>
               <div className="embla__container">
                  {covers.data.map((cover, index) => (
                     <div className="embla__slide" key={index}>
                        <Image
                           src={getSimpleImageUriArray(cover)}
                           alt={"Motorcycle image"}
                           priority={index === 0 ? true : false}
                           sizes="100vw"
                           fill
                           placeholder="blur"
                           blurDataURL="/loading-screen.png"
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}