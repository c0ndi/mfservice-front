import {PropsWithChildren} from "react";
import {StrapiImageArray} from "@/types/types";
import {getSimpleImageUriArray} from "@/utils/getSimpleImageUriArray";

import Image from "next/image";
import Link from "next/link";

import s from './index.module.scss'
import HeadingMd from "@/components/Shared/HeadingMd";

type About = {
   heading: string;
   description: string;
   buttonLabel: string;
   faqLabel: string;
   covers: { data: StrapiImageArray [] };
}

export default function About({content}: PropsWithChildren<{ content: About }>) {
   const {heading, description, buttonLabel, faqLabel, covers} = content;
   return (
      <div className={s.wrapper}>
         <div className={s.contentWrapper}>
            <HeadingMd heading={heading}/>
            <p>{description}</p>

            <Link href={"/o-nas"}>
               <button>{buttonLabel}</button>
            </Link>

            <Link href={"/#faq"}>{faqLabel}</Link>
         </div>

         <div className={s.imageWrapper}>
            {covers.data.map((image, index) => (
               <Image
                  src={getSimpleImageUriArray(image)}
                  fill
                  alt={`${heading}-photo-${index}`}
                  key={index}
               />)
            )}
         </div>
      </div>
   )
}