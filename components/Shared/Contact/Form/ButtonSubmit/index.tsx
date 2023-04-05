import s from "./index.module.scss";

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
                  <img
                     src="/icons/form-btn-sending.png"
                  />
               </button>
               : formStatus == "success" ?
                  <button
                     className={`${s.button} ${s.buttonSuccess}`}
                     type={"submit"}
                  >
                     Dziękujemy za kontakt!
                     <img
                        src="/icons/form-btn-success.png"
                        alt=""
                     />
                  </button>
                  :
                  <button
                     className={`${s.button} ${s.buttonError}`}
                     type={"submit"}
                  >
                     Coś poszło nie tak, spróbuj ponownie.
                     <img
                        src="/icons/form-btn-error.png"
                        alt=""
                     />
                  </button>
         }
      </>
   )
}