import Image from "next/image";
import { getData } from "@/utils/getData";
import { Motorcycle } from "@/components/Motorcycles/Motorcycles";
import Data from "@/components/Motorcycle/Data";
import Loading from "@/components/Shared/Loading";
import Seo from "@/components/Shared/Seo";
import { useRouter } from "next/router";
import Navbar from "@/components/Shared/Navbar";
import Contact from "@/components/Shared/Contact";
import Faq from "@/components/Shared/FAQ";
import Footer from "@/components/Shared/Footer";

type Props = {
   data: any;
   shared: any;
}

export default function Home({ data, shared }: Props) {
   const router = useRouter();

   if (router.isFallback) {
      return <Loading />
   }

   const content = data.attributes;

   const { phoneNumber, nipNumber, address, facebookLink, instagramLink, formComponent, nav, faqComponent } = shared.data.attributes;

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

   const footerContent = {
      nipNumber,
      phoneNumber,
      address,
      facebookLink,
      instagramLink,
   }
   return (
      <>
         <Seo seo={content.seo} />
         <Navbar content={navContent} />

         <main className={"pageWrapper"}>
            <Image
               src="/gradients/gradient-hero-motorcycle.png"
               alt="GradientHero"
               fill
               draggable={false}
               style={{ position: "absolute", top: 0, zIndex: -1, left: 0, userSelect: "none" }}
            />
            <Image
               src="/gradients/gradient-faq-home.png"
               alt="GradientAbout"
               fill
               style={{ position: "absolute", top: "80%", left: 0, zIndex: -1, userSelect: "none" }}
               draggable={false}
            />
            <Data content={content} />

            <Faq content={faqComponent} />
            <Contact content={contactContent} />
         </main>

         <Footer content={footerContent} />
      </>
   )
}

export async function getStaticPaths() {
   const data = await getData("/motorcycles")

   const paths = data.data.map((motorcycle: Motorcycle) => ({
      params: { slug: motorcycle.attributes.slug },
   }))

   return {
      paths,
      fallback: true,
   }
}


export async function getStaticProps({ params }: { params: { slug: string } }) {
   const data = await getData("/motorcycles", params.slug);
   const shared = await getData("/shared");


   return {
      props: {
         data: data.data[0],
         shared
      },
   }
}