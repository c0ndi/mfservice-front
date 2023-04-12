import Link from "next/link";
import s from './index.module.scss'

import Image from 'next/image';

import FBIcon from '@/public/icons/facebook.svg';
import IGIcon from '@/public/icons/instagram.svg';
import {PropsWithChildren, useEffect, useState} from "react";
import {Turn as Hamburger} from 'hamburger-react'

type Navbar = {
   links: {
      linkLabel: string;
      linkUrl: string;
   } [],
   facebookLink: string;
   instagramLink: string;
}

export default function Navbar({content}: PropsWithChildren<{ content: Navbar }>) {
   const {links, facebookLink, instagramLink} = content;

   const [isOpen, setOpen] = useState(false)
   return (
      <nav
         className={`${s.outerWrapper} ${isOpen ? s.wrapperOpen : s.wrapperClose}`}
      >
         <div className={s.wrapper}>

            {/*mobilemenu*/}
            <div className={`${s.mobileMenu} ${isOpen ? s.open : s.close}`}>
               <ul>
                  {links.map((link, index) => {
                     return (
                        <Link
                           href={link.linkUrl}
                           key={index}
                           onClick={() => setOpen(false)}
                           style={{borderTop: index == 0 ? "1px solid #222" : "none"}}
                        >
                           <li>
                              {link.linkLabel}
                           </li>
                        </Link>
                     )
                  })}
               </ul>

               <div className={s.bottomCover}>
                  <Image
                     src={"/gradients/gradient-nav-menu.png"}
                     alt={"gradient"}
                     fill
                     style={{zIndex: 995}}
                  />
                  <div className={s.socialsMenu}>
                     <Link
                        href={facebookLink}
                        target={"_blank"}
                        onClick={() => setOpen(false)}
                     >
                        <Image
                           src={FBIcon}
                           alt={"Facebook"}
                           width={24}
                           height={24}
                        />
                     </Link>

                     <Link
                        href={instagramLink}
                        target={"_blank"}
                        onClick={() => setOpen(false)}
                     >
                        <Image
                           src={IGIcon}
                           alt={"Facebook"}
                           width={24}
                           height={24}
                        />
                     </Link>
                  </div>
               </div>
            </div>
            {/*mobilemenu*/}

            <Link
               href={"/"}
               className={s.logo}
            >
               <p>
                  MF
                  <span>SERVICE</span>
               </p>
            </Link>

            <div className={s.socialsMobile}>
               <Link
                  href={facebookLink}
                  target={"_blank"}
               >
                  <Image
                     src={FBIcon}
                     alt={"Facebook"}
                     width={16}
                     height={16}
                  />
               </Link>

               <Link
                  href={instagramLink}
                  target={"_blank"}
               >
                  <Image
                     src={IGIcon}
                     alt={"Facebook"}
                     width={16}
                     height={16}
                  />
               </Link>
            </div>

            <ul className={s.links}>
               {links.map((link, index) => {
                  return (
                     <Link
                        href={link.linkUrl}
                        key={index}
                        onClick={() => setOpen(false)}
                     >
                        <li>
                           {link.linkLabel}
                        </li>
                     </Link>
                  )
               })}
            </ul>

            <div className={s.socials}>
               <Link
                  href={facebookLink}
                  target={"_blank"}
               >
                  <Image
                     src={FBIcon}
                     alt={"Facebook"}
                     width={16}
                     height={16}
                  />
               </Link>

               <Link
                  href={instagramLink}
                  target={"_blank"}
               >
                  <Image
                     src={IGIcon}
                     alt={"Facebook"}
                     width={16}
                     height={16}
                  />
               </Link>
            </div>

            <div className={s.hamburger}>
               <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={24}
               />
            </div>
         </div>
      </nav>
   )
}