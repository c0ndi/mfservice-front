// import Navbar from './navbar'
// import Footer from './footer'

import {useQuery} from "@tanstack/react-query";
import {getData} from "@/utils/getData";
import {ReactNode} from "react";
import Contact from "@/components/Shared/Contact";

export default function Layout({ children }: { children: ReactNode }) {
   const {data, isLoading, isError} = useQuery({queryKey: ['shared'], queryFn: () => getData("/shared")})

   if(isLoading) {
      return <p>loading</p>
   }

   if(isError) {
      return <p>error</p>
   }

   const {phoneNumber, nipNumber, address, facebookLink, instagramLink, formComponent, nav} = data.data.attributes;

   const contactContent = {
      formComponent,
      phoneNumber,
      facebookLink,
      instagramLink
   }

   return (
      <>
         {/*<Navbar links={data.links} />*/}
         <p>Nav</p>
         <main className={"pageWrapper"}>
            {children}
            <Contact content={contactContent} />
         </main>
         <p>footer</p>
         {/*<Footer />*/}
      </>
   )
}