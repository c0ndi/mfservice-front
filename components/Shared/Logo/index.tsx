import Link from "next/link";
import s from './index.module.scss'

export default function Logo() {
    return (
        <Link
            href={"/"}
            className={s.logo}
        >
            <div>

                <p className={s.logoHeading}>
                    HARLEY<span className={s.spanOne}>DAVIDSON</span> <span className={s.spanTwo}>LEGENDS</span>
                </p>
                <p className={s.logoSubheading}>by <span>MFSERVICE</span></p>
            </div>
        </Link>
    )
}