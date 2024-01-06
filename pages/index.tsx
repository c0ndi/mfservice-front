import { getData } from "@/utils/getData";
import About, { AboutType } from "@/components/Home/About";
import ServiceStages from "@/components/Home/ServiceStages";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import GradientHeroHome from '../public/gradients/gradient-hero-home.png';
import GradientAboutHome from '../public/gradients/gradient-about-home.png';
import GradientFaqHome from '../public/gradients/gradient-faq-home.png';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import Contact from '@/components/Shared/Contact';
import Faq from '@/components/Shared/FAQ';
import Hero from '@/components/Home/Hero';
import Otomoto from "@/components/Home/Otomoto";

type Props = {
   data: any;
   shared: any;
}

export default function Home({ data, shared }: Props) {
   if (!data) {
      return <ErrorComponent redirect />
   }

   const { heroComponent, serviceStageComponent, aboutUsComponent, seo } = data.data.attributes;

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
            <Hero content={heroComponent} />
            <Otomoto />
            <ServiceStages content={serviceStageComponent} />
            <About content={aboutUsComponent} />


            <Faq content={faqComponent} />
            <Contact content={contactContent} />
            <Image
               src={GradientHeroHome}
               alt="GradientHero"
               priority
               draggable={false}
               style={{ position: "absolute", top: "100px", zIndex: -2, left: 0, userSelect: "none", width: "100%", height: "100%" }}
            />
            <Image
               src={GradientAboutHome}
               alt="GradientAbout"
               draggable={false}
               style={{ position: "absolute", top: 0, left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px)", width: "100%", height: "100%" }}
            />
            <Image
               src={GradientFaqHome}
               alt="GradientAbout"
               style={{ position: "absolute", top: "100%", left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px)", width: "100%", height: "100%" }}
               draggable={false}
            />
         </main>

         <Footer content={footerContent} />
      </>
   )
}


export async function getStaticProps() {
   const data = await getData("/home");
   const shared = await getData("/shared");

   return {
      props: {
         data,
         shared
      },
      revalidate: 30,
   }
}