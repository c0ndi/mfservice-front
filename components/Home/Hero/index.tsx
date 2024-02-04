import s from './index.module.scss';

import { StrapiImage } from "@/types/types";
import { PropsWithChildren } from "react";
import { getSimpleImageUri } from "@/utils/getSimpleImageUri";

import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Shared/Heading";
import CustomImage from "@/components/Shared/CustomImage";

import useEmblaCarousel from 'embla-carousel-react'

export type HeroType = {
   heading: string;
   description: string;
   buttonLink: string;
   buttonLabel: string;
   cover: StrapiImage;
}

export default function Hero({ content }: PropsWithChildren<{ content: HeroType }>) {
   const { heading, description, buttonLink, buttonLabel, cover } = content;

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
                  <div className="embla__slide">
                     <Image
                        src={getSimpleImageUri(cover)}
                        alt={"Motorcycle image"}
                        fill
                        priority
                        placeholder="blur"
                        blurDataURL="/loading-screen.png"
                        sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'
                     />
                  </div>
                  <div className="embla__slide">
                     <Image
                        src={getSimpleImageUri(cover)}
                        alt={"Motorcycle image"}
                        fill
                        priority
                        placeholder="blur"
                        blurDataURL="/loading-screen.png"
                        sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'
                     />
                  </div>
                  <div className="embla__slide">
                     <Image
                        src={getSimpleImageUri(cover)}
                        alt={"Motorcycle image"}
                        fill
                        priority
                        placeholder="blur"
                        blurDataURL="/loading-screen.png"
                        sizes='(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw'
                     />
                  </div>
               </div>
            </div>
            {/* <CustomImage
               alt={"MotorcycleImage"}
               src={getSimpleImageUri(cover)}
               fill
            /> */}
         </div>
      </section>
   )
}