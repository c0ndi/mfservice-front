import s from './index.module.scss'
import Content from "@/components/Shared/Contact/Content";
import Form from "@/components/Shared/Contact/Form";
import {StrapiImage} from "@/types/types";
import {PropsWithChildren} from "react";
import HeadingMd from "@/components/Shared/HeadingMd";

export type FormComponent = {
   heading: string;
   formHeading: string;
   name: string;
   mail: string;
   description: string;
   formClause: string;
   ceoCover: StrapiImage;
}

type Contact = {
   phoneNumber: string;
   facebookLink: string;
   instagramLink: string;
   formComponent: FormComponent;
}

export default function Contact({content}: PropsWithChildren<{ content: Contact }>) {
   const {formComponent, phoneNumber, facebookLink, instagramLink} = content;

   const contentData = {
      ...formComponent,
      phoneNumber,
      facebookLink,
      instagramLink
   }

   return (
      <section className={s.wrapper}>
         <HeadingMd heading={formComponent.formHeading}/>

         <div className={s.contactPageWrapper}>
            <Content content={contentData}/>
            <Form formClause={formComponent.formClause}/>
         </div>
      </section>
   )
}