import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function ErrorComponent({redirect}: { redirect?: boolean}) {
   const router = useRouter();
   useEffect(()=> {
      router.push("/error")
   }, [redirect, router])
   return (
      <main className="errorPage">
         <p className={"logo"}>
            MF
            <span>SERVICE</span>
         </p>
         <h1>Coś poszło nie tak wróć na stronę główną.</h1>

         <Link href={"/"}>
            <span>Strona główna</span>
         </Link>
      </main>
   )
}