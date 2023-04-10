import Head from 'next/head'
import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import {useRouter} from "next/router";
import Heading from "@/components/Shared/Heading";
import {Key} from "react";
import Data from "@/components/Motorcycle/Data";
import Seo from "@/components/Shared/Seo";

export default function Home() {
   const router = useRouter()
   const { slug } = router.query

   const {data, isLoading, isError} = useQuery({queryKey: [slug], queryFn: () => getData(`/motorcycles`, slug)})

   if (isLoading) {
      return <div>Loading...</div>
   }

   if(isError) {
      return <div>Error...</div>
   }

   const content = data.data[0].attributes;

   return (
      <>
         <Seo seo={content.seo}/>
         <Data content={content} />
      </>
   )
}
