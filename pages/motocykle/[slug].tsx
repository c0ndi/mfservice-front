import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import { getData } from "@/utils/getData";
import { useRouter } from "next/router";
import Heading from "@/components/Shared/Heading";
import { Key } from "react";
import Data from "@/components/Motorcycle/Data";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import WelcomeLoading from "@/components/Shared/WelcomeLoading";
import Loading from "@/components/Shared/Loading";
import { useLoading } from '@/hooks/useLoading';

export default function Home() {
   const router = useRouter()
   const { slug } = router.query

   const { data, isLoading, isError } = useQuery({ queryKey: [slug], queryFn: () => getData(`/motorcycles`, slug) })

   const loading = useLoading(isLoading, 500)

   if (loading) {
      return <Loading />
   }

   if (isError || !data.data.length) {
      return <ErrorComponent redirect />
   }

   const content = data.data[0].attributes;
   return (
      <>
         <Seo seo={content.seo} />
         <Image
            src="/gradients/gradient-hero-motorcycle.png"
            alt="GradientHero"
            fill
            draggable={false}
            style={{ position: "absolute", top: 0, zIndex: -1, left: 0, userSelect: "none" }}
         />
         <Image
            src="/gradients/gradient-faq-home.png"
            alt="GradientAbout"
            fill
            style={{ position: "absolute", top: "80%", left: 0, zIndex: -1, userSelect: "none" }}
            draggable={false}
         />
         <Data content={content} />
      </>
   )
}
