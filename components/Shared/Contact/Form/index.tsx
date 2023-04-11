import s from "./index.module.scss";
import ButtonSubmitVariants from "@/components/Shared/Contact/Form/ButtonSubmit";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";

export default function Form({formClause}: { formClause: string }) {
   const {register, handleSubmit, formState: {errors}, reset} = useForm<{name: string, email: string, message: string, clauseCB: boolean}>();

   const [formStatus, setFormStatus] = useState<"normal" | "sending" | "success" | "error">('normal');
   const [disabled, setDisabled] = useState(false);

   const onSubmit = async (data: {name: string, email: string, message: string, clauseCB: boolean}) => {
      setFormStatus('sending');

      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI}/api/messages`, {data: data}).then(() => {
         setFormStatus('success')

         setDisabled(true)
      }).catch(err => {
         console.log(err)
         setFormStatus('error')
      });

      reset()
   }
   return (
      <form
         className={s.form}
         onSubmit={handleSubmit(onSubmit)}
      >
         <label className={errors.name && s.invalidLabel}>TWOJE IMIE</label>
         <input
            placeholder={"*Wpisz swoję imię"}
            {...register("name", {required: true})}
            className={errors.name && s.invalidInput}
         />

         <label className={errors.email && s.invalidLabel}>ADRES EMAIL</label>
         <input
            placeholder={"*Twój adres email"}
            {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
            className={errors.email && s.invalidInput}
         />

         <label className={errors.message && s.invalidLabel}>WIADOMOŚĆ</label>
         <textarea
            placeholder={"*Twoja wiadomość"}
            maxLength={500}
            {...register("message", {required: true, max: 500})}
            className={errors.message && s.invalidInput}
         />

         <div className={s.checkboxWrapper}>
            <input
               type="checkbox"
               id={"clauseCB"}
               {...register('clauseCB', {required: true})} />
            <label
               htmlFor="clauseCB"
               className={errors.clauseCB && s.invalidClause}
            >
               <p>
                  {formClause}
               </p>
            </label>
         </div>

         <ButtonSubmitVariants formStatus={formStatus} disabled={disabled}/>
      </form>
   )
}