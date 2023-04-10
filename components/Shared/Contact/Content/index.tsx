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
         </div>

         <p className={s.desc}>{description}</p>

         <div className={s.iconsWrapper}>
            <Link
               passHref
               href={facebookLink}
               target={"_blank"}
            >
               <Image
                  src="/icons/facebook.svg"
                  alt=""
                  width={24}
                  height={24}
               />
            </Link>

            <Link
               passHref
               href={instagramLink}
               target={"_blank"}
            >
               <Image
                  src="/icons/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
               />
            </Link>
         </div>

         <Link href={`tel:${phoneNumber}`}>
            <p className={s.phoneNumberBtn}>Zadzwoń <span>{phoneNumber}</span></p>
         </Link>
      </div>
   )
}