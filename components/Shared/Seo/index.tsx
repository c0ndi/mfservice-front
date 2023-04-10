import {PropsWithChildren} from "react";
import {getSimpleImageUri} from "@/utils/getSimpleImageUri";
import {strapiURL} from "@/config/axios";
import {StrapiImage} from "@/types/types";
import Head from "next/head";

type Seo = {
   metaTitle: string;
   metaDescription: string;
   metaImage: string;
   metaSocialFacebook: {
      title: string;
      description: string;
      image: StrapiImage;
      url: string;
   };
   keywords?: string;
   metaRobots?: string;
   structuredData?: string;
   metaViewport?: string;
   canonicalURL?: string;
}

export default function Seo({seo}: PropsWithChildren<{ seo: Seo }>) {
   const seoData = seo;
   const seoStructuredData = seo?.structuredData;
   return (
      <Head>
         {seoData &&
            <>
               <title>{seoData.metaTitle}</title>
               <meta
                  name="description"
                  content={seoData.metaDescription}
                  key="description"
               />
               <meta
                  name="keywords"
                  content={seoData.keywords}
               />
               <meta
                  name="twitter:card"
                  content="summary_large_image"
                  key="twitter:card"
               />
               <meta
                  property="og:url"
                  content={seoData.canonicalURL}
                  key="og:url"
               />
               <meta
                  property="og:title"
                  content={seoData.metaTitle}
                  key="og:title"
               />
               <meta
                  property="og:description"
                  content={seoData.metaDescription}
                  key="og:description"
               />
               <meta
                  property="og:image"
                  content={strapiURL + seoData?.metaImage}
                  key="og:image"
               />
               <link
                  rel="canonical"
                  href={seoData.canonicalURL}
               />
            </>
         }

         {seoData?.metaSocialFacebook && (
            <>
               <meta
                  property="og:title"
                  content={seoData.metaSocialFacebook.title}
               />
               <meta
                  property="og:url"
                  content={seoData.metaSocialFacebook.url}
               />
               <meta
                  property="og:description"
                  content={seoData.metaSocialFacebook.description}
               />
               <meta
                  property="og:image"
                  content={strapiURL + seoData.metaSocialFacebook.image?.data.attributes.url}
               />
               <meta
                  property="og:type"
                  content="article"
               />
            </>
         )}

         <script type="application/ld+json">{seoStructuredData}</script>

         <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
         />
         <link
            rel="manifest"
            href="/site.webmanifest"
         />
         <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
         />
         <meta
            name="msapplication-TileColor"
            content="#da532c"
         />
         <meta
            name="theme-color"
            content="#ffffff"
         />
      </Head>
   )
}