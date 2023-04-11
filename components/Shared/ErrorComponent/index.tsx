import Link from "next/link";

export default function ErrorComponent() {
   return (
      <main className="errorPage">
         <h1>Coś poszło nie tak <span>:/</span></h1>

         <Link href={"/"}>
            <p>Strona główna</p>
         </Link>
      </main>
   )
}