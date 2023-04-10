import s from './index.module.scss'
import Link from "next/link";
import {PropsWithChildren} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import {StrapiImage} from "@/types/types";
import Image from 'next/image'

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

export default function Content({content}: PropsWithChildren<{ content: Content }>) {
   const {formHeading, name, mail, description, ceoCover, phoneNumber, facebookLink, instagramLink} = content;
   return (
      <div className={s.leftWrapper}>
         <p className={s.heading}>{formHeading}</p>

         <div className={s.ceoWrapper}>
            <div className={s.imageWrapperCeo}>
               <Image
                  src={getSimpleImageUri(ceoCover)}
                  alt="Photo"
                  className={s.ceoImage}
                  fill
               />
            </div>

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
                  <Image
                     src="/icons/facebook.svg"
                     alt=""
                     width={10}
                     height={10}
                  />
               </Link>

               <Link
                  passHref
                  href={instagramLink}
               >
                  <Image
                     src="/icons/instagram.svg"
                     alt=""
                     width={10}
                     height={10}
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