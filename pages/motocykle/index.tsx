import Head from 'next/head'
import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import {useRouter} from "next/router";
import Heading from "@/components/Shared/Heading";
import {Key} from "react";
import Link from "next/link";
import Hero from "@/components/Motorcycles/Hero";
import Motorcycles from "@/components/Motorcycles/Motorcycles";
import History from "@/components/Motorcycles/History";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";

export default function Home() {
   const router = useRouter()
   const {slug} = router.query

   const {data, isLoading, isError} = useQuery({queryKey: [slug], queryFn: () => getData(`/about`)})

   if (isLoading) {
      return <div>Loading...</div>
   }

   if (isError) {
      return <div>Error...</div>
   }

   const {
      heroComponent,
      motorcyclesComponent,
      historyComponent,
      seo
   } = data.data.attributes;

   return (
      <>
         <Seo seo={seo}/>
         <Image
            src="/gradients/gradient-hero-motorcycle.png"
            alt="GradientHero"
            fill
            draggable={false}
            style={{position: "absolute", top: 0, zIndex: -1, left: 0,transform: "translateY(000px)", userSelect: "none"}}
         />
         <Image
            src="/gradients/gradient-motorcycles-motorcycle.png"
            alt="GradientHero"
            fill
            draggable={false}
            style={{position: "absolute", top: 0, zIndex: -1, left: 0,transform: "translateY(900px)", userSelect: "none"}}
         />
         <Image
            src="/gradients/gradient-faq-home.png"
            alt="GradientAbout"
            fill
            style={{position: "absolute", top: "100%", left: 0, zIndex: -1, userSelect: "none", transform: "translateY(1000px) rotate(180deg)" }}
            draggable={false}
         />
         <Hero content={heroComponent}/>
         <Motorcycles content={motorcyclesComponent}/>
         <History content={historyComponent}/>
      </>
   )
}
