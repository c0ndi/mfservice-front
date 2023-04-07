import {PropsWithChildren} from "react";
import s from './index.module.scss'
import Link from "next/link";

type Hero = {
   heading: string,
   description: string,
   buttonLabel: string,
   buttonLink: string,
}

export default function Hero({content}: PropsWithChildren<{ content: Hero }>) {
   const {heading, description, buttonLabel, buttonLink} = content;

   const splittedHeading = heading.split(" ");
   const firstWord = splittedHeading.shift();
   const lastWord = splittedHeading.pop();
   const rest = splittedHeading.join(" ");

   return (
      <section className={s.wrapper}>
         <h1>
            <span>{firstWord}</span>
            &nbsp;
            {rest}
            &nbsp;
            <span>{lastWord}</span>
         </h1>
         <p className={s.desc}>{description}</p>

         <Link href={buttonLink}>
            <button className={s.button}>
               {buttonLabel}
            </button>
         </Link>
      </section>
   )
}