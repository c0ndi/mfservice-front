import { useQuery } from '@tanstack/react-query'
import { getData } from "@/utils/getData";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import ServiceStages from "@/components/Home/ServiceStages";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";
import { useLoading } from '@/hooks/useLoading';
import GradientHeroHome from '../public/gradients/gradient-hero-home.png';
import GradientAboutHome from '../public/gradients/gradient-about-home.png';
import GradientFaqHome from '../public/gradients/gradient-faq-home.png';

export default function Home() {
   const { data, isLoading, isError } = useQuery({ queryKey: ['home'], queryFn: () => getData("/home") })

   const loading = useLoading(isLoading, 500)

   if (loading) {
      return <Loading />
   }

   if (isError) {
      return <ErrorComponent />
   }

   const {
      heroComponent,
      serviceStageComponent,
      aboutUsComponent,
      seo,
   } = data.data.attributes;
   return (
      <>
         <Seo seo={seo} />
         <Hero content={heroComponent} />
         <ServiceStages content={serviceStageComponent} />
         <About content={aboutUsComponent} />

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
      </>
   )
}
