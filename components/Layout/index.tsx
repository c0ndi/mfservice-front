import {useQuery} from "@tanstack/react-query";
import {getData} from "@/utils/getData";
import {ReactNode} from "react";
import Contact from "@/components/Shared/Contact";
import Faq from "@/components/Shared/FAQ";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
   const {data, isLoading, isError} = useQuery({queryKey: ['shared'], queryFn: () => getData("/shared")})

   if(isLoading) {
      return <p>loading</p>
   }

   if(isError) {
      return <p>error</p>
   }

   const {phoneNumber, nipNumber, address, facebookLink, instagramLink, formComponent, nav, faqComponent} = data.data.attributes;

   const contactContent = {
      formComponent,
      phoneNumber,
      facebookLink,
      instagramLink
   }

   const navContent = {
      links: nav.links,
      instagramLink,
      facebookLink,
   }

   return (
      <>
         <Navbar content={navContent} />
         <main className={"pageWrapper"}>
            {children}
            <Faq content={faqComponent} />
            <Contact content={contactContent} />
         </main>
         <Footer />
      </>
   )
}