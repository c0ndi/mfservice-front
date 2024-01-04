import { PropsWithChildren } from "react";
import { StrapiImageArray } from "@/types/types";

import Link from "next/link";

import s from './index.module.scss'
import Heading from "@/components/Shared/Heading";
import Grid from "@/components/Home/About/Grid";
import FaqIcon from "@/public/icons/faq-icon.svg";
import Image from "next/image";

export type AboutType = {
   heading: string;
   description: string;
   buttonLabel: string;
   faqLabel: string;
   covers: { data: StrapiImageArray[] };
}

export default function About({ content }: PropsWithChildren<{ content: AboutType }>) {
   const { heading, description, buttonLabel, faqLabel, covers } = content;
   return (
      // @ts-ignore
      <section className={s.wrapper} name={"motocykle"}>
         <div className={s.contentWrapper}>
            <Heading
               heading={heading}
               size={"md"}
            />
            <p className={s.desc}>{description}</p>

            <Link href={"/motocykle"}>
               <button className={s.button}>{buttonLabel}</button>
            </Link>

            <Link href={"/#faq"}>
               <div className={s.faq}>
                  <p className={s.faqText}>
                     {faqLabel}
                  </p>
                  <Image
                     src={FaqIcon}
                     alt={"Faq"}
                     width={24}
                     height={24}
                  />
               </div>
            </Link>
         </div>

         <Grid covers={covers} />
      </section>
   )
}