import Link from "next/link";
import s from './index.module.scss'
import {PropsWithChildren} from "react";
import Image from "next/image";
import FBIcon from "@/public/icons/facebook.svg";
import IGIcon from "@/public/icons/instagram.svg";
import Logo from "../Logo";

type Footer = {
   facebookLink: string;
   instagramLink: string;
   phoneNumber: string;
   nipNumber: string;
   address: string;
}

export default function Footer({content}: PropsWithChildren<{ content: Footer }>) {
   const {facebookLink, instagramLink, phoneNumber, nipNumber, address} = content;
   return (
      <footer className={s.wrapper}>
         <div className={s.footerWrapper}>
            <div className={s.line}/>
            <Logo/>

            <div className={s.contact}>
               <p>NIP: <span>{nipNumber}</span></p>
               <Link href={`tel:${phoneNumber}`}>
                  <p>Kontakt: <span>{phoneNumber}</span></p>
               </Link>
            </div>

            <div className={s.socials}>
               <Link
                  href={facebookLink}
                  target={"_blank"}
               >
                  <Image
                     src={FBIcon}
                     alt={"Facebook"}
                     width={20}
                     height={20}
                  />
               </Link>

               <Link
                  href={instagramLink}
                  target={"_blank"}
               >
                  <Image
                     src={IGIcon}
                     alt={"Facebook"}
                     width={20}
                     height={20}
                  />
               </Link>
            </div>
         </div>
         <Image
            src="/gradients/gradient-footer.png"
            alt="GradientFooter"
            fill
            style={{position: "absolute", bottom: "200px", right: 0, zIndex: -1, userSelect: "none"}}
            draggable={false}
         />
      </footer>
   )
}