import s from './index.module.scss'
import {transformIndex} from "@/utils/transformIndex";
import {PropsWithChildren, useState} from "react";
import {motion, AnimatePresence} from "framer-motion"
import HeadingMd from "@/components/Shared/HeadingMd";

type Question = {
   question: string,
   answer: string,
}

type Faq = {
   heading: string,
   questions: Question [],
}

function SingleQuestion({
                           content,
                           isLast,
                           index
                        }: PropsWithChildren<{ content: Question, isLast: boolean, index: number }>) {
   const [isOpen, setIsOpen] = useState(false);

   const {question, answer} = content;
   return (
      <div
         className={isLast ? s.singleQuestion : s.singleQuestionLast}
         onClick={() => setIsOpen((prev) => !prev)}
      >
         <div className={s.headingWrapper}>
            <p className={s.index}>{transformIndex(index + 1)}</p>
            <p className={s.heading}>{question}</p>

            <img
               src="/icons/triangle.png"
               alt="Photo"
               style={{transform: `rotate(${isOpen ? "180deg" : "0"})`, transition: '0.3s'}}
            />
         </div>

         <AnimatePresence mode="wait">
            {isOpen && (
               <motion.div
                  initial={{
                     height: 0,
                     opacity: 0,
                  }}
                  animate={{
                     height: "auto",
                     opacity: 1,
                     transition: {
                        height: {
                           duration: 0.4,
                        },
                        opacity: {
                           duration: 0.25,
                           delay: 0.15,
                        },
                     },
                  }}
                  exit={{
                     height: 0,
                     opacity: 0,
                     transition: {
                        height: {
                           duration: 0.4,
                        },
                        opacity: {
                           duration: 0.25,
                        },
                     },
                  }}
                  key="test"
               >
                  <span className={s.desc}>{answer}</span>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}


export default function Faq({content}: PropsWithChildren<{ content: Faq }>) {
   const {heading, questions} = content;
   return (
      <section className={s.wrapper}>
         <HeadingMd heading={heading}/>

         <div className={s.questionsWrapper}>
            {questions.map((question: Question, index, arr) => (
               <SingleQuestion
                  key={index}
                  content={question}
                  isLast={index != arr.length - 1}
                  index={index}
               />
            ))}
         </div>
      </section>
   )
}