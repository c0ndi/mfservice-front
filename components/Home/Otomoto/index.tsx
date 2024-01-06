import React from 'react'
import s from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Otomoto({ }) {
  const otomotoUrl = "https://mfservice.otomoto.pl/inventory"
  const olxUrl = "https://www.olx.pl/oferty/uzytkownik/3JZ6Q/"
  return (
    <div className={s.wrapper}>
      <p className={s.heading}>Gdzie <span>sprzedajemy</span>? {"(NOWE AUKCJE!)"}</p>

      <p className={s.desc}>Nasze motocykle można znaleźć na najpopularniejszych polskich portalach aukcyjnych, takich jak <Link href={otomotoUrl} target='_blank'>Otomoto</Link> czy <Link href={olxUrl} target='_blank'>Olx</Link></p>

      <div className={s.imageWrapper}>
        <Image
          alt="Otomoto"
          width={250}
          height={40}
          src="/images/otomoto.webp"
        />

        <Image
          alt="Olx"
          width={95}
          height={50}
          src="/images/olx.webp"
        />
      </div>
    </div>
  )
}