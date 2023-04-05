import s from './index.module.scss'

export default function HeadingMd({heading}: {heading: string}) {
   const splittedHeading = heading.split(/ +/);
   const lastWord = splittedHeading.pop();
   const rest = splittedHeading.join(" ");

   return (
      <p className={s.heading}>{rest} <span>{lastWord}</span></p>
   )
}