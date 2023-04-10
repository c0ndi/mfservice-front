import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import ServiceStages from "@/components/Home/ServiceStages";
import Seo from "@/components/Shared/Seo";

export default function Home() {
   const {data, isLoading, isError} = useQuery({queryKey: ['home'], queryFn: () => getData("/home")})

   if (isLoading) {
      return <div>Loading...</div>
   }

   if(isError) {
      return <div>Error...</div>
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
         <ServiceStages content={serviceStageComponent}/>
         <About content={aboutUsComponent}/>
      </>
   )
}
