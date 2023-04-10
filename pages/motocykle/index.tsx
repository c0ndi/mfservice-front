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
         <Hero content={heroComponent}/>
         <Motorcycles content={motorcyclesComponent} />
         <History content={historyComponent}/>
      </>
   )
}
