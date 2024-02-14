import { StrapiImageArray } from '@/types/types';
import React from 'react'
import s from './index.module.scss'
import Image from 'next/image';
import { getSimpleImageUriArray } from '@/utils/getSimpleImageUriArray';
import Link from 'next/link';
import Heading from '../Shared/Heading';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  sales: {
    attributes: {
      name: string;
      mileage: string;
      url: string;
      year: string;
      images: { data: StrapiImageArray[] }
    }
  }[]
}

export default function Sales({ sales }: Props) {
  return (
    <div className={s.wrapper}>
      <Heading heading={'Obecnie na sprzedaż'} size={'md'} />

      <div className={s.contentWrapper} style={{
        gridTemplateColumns: `repeat(${sales.length}, 1fr)`
      }}>
        {sales.map((sale, index) => (
          <div key={index} className={s.sale}>
            <Link href={sale.attributes.url}>
              <div className={s.imageWrapper}>
                <Image
                  src={getSimpleImageUriArray(sale.attributes.images.data[0])}
                  alt={sale.attributes.name}
                  fill
                />
              </div>

              <div className={s.content}>
                <p>{sale.attributes.name}</p>

                <div className={s.info}>
                  <span>{sale.attributes.mileage} km</span>
                  <span>{sale.attributes.year}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}