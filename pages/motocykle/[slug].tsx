import Head from 'next/head'
import {useQuery} from '@tanstack/react-query'
import {getData} from "@/utils/getData";
import {useRouter} from "next/router";
import Heading from "@/components/Shared/Heading";
import {Key} from "react";

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

   const {
      name,
      description,
      motorcycleParameters,
      covers,
   } = data.data[0].attributes;

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

         <Heading heading={name} />
         <p style={{padding: "6em 0"}}>{description}</p>
         <ul style={{margin: "6em 0", marginBottom: "50vh"}}>
            {motorcycleParameters.map((parameter: {name: string, parameter: string}, key: Key) => (
               <li key={key} style={{display: "flex", gap: "1em"}}>
                  <p>{parameter.name}</p>
                  <p>{parameter.parameter}</p>
               </li>
               ))}
         </ul>
      </>
   )
}
