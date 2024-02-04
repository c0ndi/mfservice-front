import React from 'react'
import s from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Otomoto({ }) {
  const otomotoUrl = "https://mfservice.otomoto.pl/inventory"
  return (
    <div className={s.wrapper}>
      <p className={s.heading}>Gdzie <span>sprzedajemy</span>? {"(NOWE AUKCJE!)"}</p>

      <p className={s.desc}>Nasze motocykle można znaleźć na <Link href={otomotoUrl} target='_blank'>Otomoto</Link>.</p>

      <div className={s.imageWrapper}>
        <Image
          alt="Otomoto"
          width={250}
          height={40}
          src="/images/otomoto.webp"
        />
      </div>
    </div>
  )
}