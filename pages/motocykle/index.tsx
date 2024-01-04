import { getData } from "@/utils/getData";
import { useRouter } from "next/router";
import Hero from "@/components/Motorcycles/Hero";
import Motorcycles from "@/components/Motorcycles/Motorcycles";
import History from "@/components/Motorcycles/History";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";
import Contact from '@/components/Shared/Contact';
import Faq from '@/components/Shared/FAQ';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';

type Props = {
   data: any;
   shared: any;
}

export default function Home({ data, shared }: Props) {
   const router = useRouter();

   if (router.isFallback) {
      return <Loading />
   }

   if (!data) {
      return <ErrorComponent redirect />
   }

   const {
      heroComponent,
      motorcyclesComponent,
      historyComponent,
      seo,
   } = data.data.attributes;


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
         <Seo seo={seo} />
         <Navbar content={navContent} />

         <main className={"pageWrapper"}>
            <Image
               src="/gradients/gradient-hero-motorcycle.png"
               alt="GradientHero"
               fill
               draggable={false}
               style={{ position: "absolute", top: 0, zIndex: -1, left: 0, transform: "translateY(000px)", userSelect: "none" }}
            />
            <Image
               src="/gradients/gradient-motorcycles-motorcycle.png"
               alt="GradientHero"
               fill
               draggable={false}
               style={{ position: "absolute", top: 0, zIndex: -1, left: 0, transform: "translateY(900px)", userSelect: "none" }}
            />
            <Image
               src="/gradients/gradient-faq-home.png"
               alt="GradientAbout"
               fill
               style={{ position: "absolute", top: "100%", left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px) rotate(180deg)" }}
               draggable={false}
            />
            <Hero content={heroComponent} />
            <Motorcycles content={motorcyclesComponent} />
            <History content={historyComponent} />

            <Faq content={faqComponent} />
            <Contact content={contactContent} />
         </main>

         <Footer content={footerContent} />
      </>
   )
}

export async function getStaticProps() {
   const data = await getData("/about");
   const shared = await getData("/shared");

   return {
      props: {
         data,
         shared
      },
   }
}