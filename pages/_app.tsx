import '@/styles/globals.scss'
import '@/styles/reset.scss'
import type { AppProps } from 'next/app'
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const layoutPaths = ["/", "/motocykle", "/motocykle/[slug]"];
   const isLayout = layoutPaths.includes(router.pathname);

   return (
      <QueryClientProvider client={queryClient}>
         {isLayout ? (
            <Layout>
               <Component {...pageProps} />
            </Layout>
         ) : (
            <Component {...pageProps} />
         )}
      </QueryClientProvider>
   )
}