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
      motorycleComponent,
      historyComponent,
      seo
   } = data.data.attributes;

   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta
               name="description"
               content="Generated by create next app"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link
               rel="icon"
               href="/favicon.ico"
            />
         </Head>

         <Hero content={heroComponent}/>
         <Motorcycles content={motorycleComponent} />
         <History content={historyComponent}/>
      </>
   )
}
