import s from './index.module.scss'

export default function Heading({heading, size}: {heading: string, size: "md" | "lg"}) {
   const splittedHeading = heading.split(/ +/);
   const lastWord = splittedHeading.pop();
   const rest = splittedHeading.join(" ");

   return (
      <p className={`${s.heading} ${size == "md" ? s.md : s.lg}`}>{rest} <span>{lastWord}</span></p>
   )
}