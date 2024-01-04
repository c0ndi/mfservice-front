import { Suspense } from "react";
import Image from "next/image";
import WelcomeLoading from "@/components/Shared/WelcomeLoading";
import { MotorcycleWrapper } from '@/components/Motorcycle/Data/wrapper';
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getData } from "@/utils/getData";
import axios from "axios";
import { Motorcycle } from "@/components/Motorcycles/Motorcycles";

export default function Home() {
   return (
      <>
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
         <Suspense fallback={<WelcomeLoading />}>
            <MotorcycleWrapper />
         </Suspense>
      </>
   )
}

// export async function getStaticPaths() {
//    const res = (await axios.get('/motorcycles')).data;

//    const paths = res.map((motorcycle: Motorcycle) => ({
//       params: { slug: motorcycle.attributes.slug },
//    }))

//    console.log(paths)

//    return { paths, fallback: false }
// }

// export async function getStaticProps({ params }: { params: { slug: string } }) {
//    const { slug } = params;

//    const queryClient = new QueryClient()

//    await queryClient.prefetchQuery({
//       queryKey: [slug],
//       queryFn: () => getData(`/motorcycles`, slug),
//    })

//    return {
//       props: {
//          dehydratedState: dehydrate(queryClient),
//       },
//    }
// }