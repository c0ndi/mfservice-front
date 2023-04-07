import '@/styles/globals.scss'
import '@/styles/reset.scss'
import type {AppProps} from 'next/app'
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import Layout from "@/components/Layout";

const queryClient = new QueryClient()
export default function App({Component, pageProps}: AppProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </QueryClientProvider>
   )
}