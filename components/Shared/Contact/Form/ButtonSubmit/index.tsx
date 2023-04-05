import s from "./index.module.scss";
import Image from "next/image";

export default function ButtonSubmitVariants({formStatus}: { formStatus: string }) {
   return (
      <>
         {formStatus == "normal" ?
            <button
               className={s.button}
               type={"submit"}
            >
               Wyślij wiadomość
            </button>
            : formStatus == "sending" ?
               <button
                  className={`${s.button} ${s.buttonSending}`}
                  type={"submit"}
               >
                  Wysyłanie wiadomości...
                  <Image
                     src="/icons/form-btn-sending.png"
                     alt={"Sending icon"}
                     width={30}
                     height={30}
                  />
               </button>
               : formStatus == "success" ?
                  <button
                     className={`${s.button} ${s.buttonSuccess}`}
                     type={"submit"}
                  >
                     Dziękujemy za kontakt!
                     <Image
                        src="/icons/form-btn-success.png"
                        alt="Success icon"
                        width={30}
                        height={30}
                     />
                  </button>
                  :
                  <button
                     className={`${s.button} ${s.buttonError}`}
                     type={"submit"}
                  >
                     Coś poszło nie tak, spróbuj ponownie.
                     <Image
                        src="/icons/form-btn-error.png"
                        alt="Erorr icon"
                        width={30}
                        height={30}
                     />
                  </button>
         }
      </>
   )
}