import { PropsWithChildren } from "react";
import Heading from "@/components/Shared/Heading";
import s from './index.module.scss'
import MotorcycleContainer from "@/components/Motorcycles/Motorcycles/MotorcycleContainer";
import { StrapiImageArray } from "@/types/types";

export type Motorcycle = {
   attributes: {
      slug: string,
      name: string,
      motorcycleParameters: { name: string, parameter: string }[],
      covers: { data: StrapiImageArray[] };
   }
}

type Motorcycles = {
   heading: string,
   showMoreLabel: string,
   motorcycles: { data: Motorcycle[] },
}

export default function Motorcycles({ content }: PropsWithChildren<{ content: Motorcycles }>) {
   const { heading, showMoreLabel, motorcycles } = content;
   return (
      // @ts-ignore
      <section className={s.wrapper} name={"motocykle"}>
         <Heading
            heading={heading}
            size={"md"}
         />

         <div className={s.motorcycleWrapper}>
            {motorcycles.data.map((motorcycle, index) => {
               return (
                  <MotorcycleContainer content={motorcycle} key={index} />
               )
            })}
         </div>

         {/* <div className={s.slider}>
            <Swiper
               spaceBetween={50}
               slidesPerView={1}
               modules={[Pagination]}
               pagination={{ clickable: true }}
               style={{
                  overflowY: "hidden"
               }}
            >
               {motorcycles.data.map((motorcycle, index) => (
                  <SwiperSlide key={index}>
                     <MotorcycleContainer content={motorcycle} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div> */}
      </section>
   )
}