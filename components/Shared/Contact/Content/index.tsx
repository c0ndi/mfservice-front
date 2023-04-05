import s from './index.module.scss'
import Link from "next/link";
import {PropsWithChildren} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import {StrapiImage} from "@/types/types";

type Content = {
   formHeading: string;
   name: string;
   mail: string;
   description: string;
   ceoCover: StrapiImage;
   phoneNumber: string;
   facebookLink: string;
   instagramLink: string;
}

export default function Content({ content }: PropsWithChildren<{ content: Content }>) {
   const {formHeading, name, mail, description, ceoCover, phoneNumber, facebookLink, instagramLink} = content;
   return (
      <div className={s.leftWrapper}>
         <p className={s.heading}>{formHeading}</p>

         <div className={s.ceoWrapper}>
            <img
               src={getSimpleImageUri(ceoCover)}
               alt="Photo"
               className={s.ceoImage}
            />

            <div>
               <p className={s.ceoName}>{name}</p>
               <a
                  href={`mailto:${mail}`}
                  className={s.ceoCompany}
               >
                  {mail}
               </a>
            </div>

            <div className={s.iconsWrapper}>
               <Link
                  passHref
                  href={facebookLink}
               >
                  <img
                     src="/icons/facebook.svg"
                     alt=""
                  />
               </Link>

               <Link
                  passHref
                  href={instagramLink}
               >
                  <img
                     src="/icons/instagram.svg"
                     alt=""
                  />
               </Link>
            </div>
         </div>

         <p className={s.desc}>{description}</p>

         <Link href={`tel:${phoneNumber}`}>
            <p className={s.phoneNumberBtn}>Zadzwoń <span>{phoneNumber}</span></p>
         </Link>
      </div>
   )
}