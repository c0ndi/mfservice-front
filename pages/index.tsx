import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import ServiceStages from "@/components/Home/ServiceStages";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import Loading from "@/components/Shared/Loading";

export default function Home() {
   const {data, isLoading, isError} = useQuery({queryKey: ['home'], queryFn: () => getData("/home")})

   if (isLoading) {
      return <Loading/>
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
         <Seo seo={seo}/>
         <Hero content={heroComponent}/>
         <Image
            src="/gradients/gradient-hero-home.png"
            alt="GradientHero"
            fill
            draggable={false}
            style={{position: "absolute", top: "100px", zIndex: -2, left: 0, userSelect: "none"}}
         />
         <Image
            src="/gradients/gradient-about-home.png"
            alt="GradientAbout"
            fill
            draggable={false}
            style={{position: "absolute", top: 0, left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px)"}}
         />
         <Image
            src="/gradients/gradient-faq-home.png"
            alt="GradientAbout"
            fill
            style={{position: "absolute", top: "100%", left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px)" }}
            draggable={false}
         />
         <ServiceStages content={serviceStageComponent}/>
         <About content={aboutUsComponent}/>
      </>
   )
}
