import Logo from '../Logo'
import s from './index.module.scss'

export default function WelcomeLoading() {
   return (
      <div className={s.wrapper}>
         <div>
            <div className={s.logo}>
               <Logo />
            </div>
            <div />
         </div>
      </div>
   )
}