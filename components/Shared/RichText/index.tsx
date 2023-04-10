import ReactMarkdown from 'react-markdown'
import s from './index.module.scss'
// @ts-ignore
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
// @ts-ignore
import DOMpurify from 'dompurify';
import Link from "next/link";

type RichText = {
   desc: string
}

export default function RichText({desc}: RichText) {
   return (
      <div className={s.wrapper}>
         <ReactMarkdown
            components={{
               blockquote: ({node, ...props}) => <blockquote {...props}/>,
               del: ({node, ...props}) => <span className={s.customDel}>{props.children[0]}</span>,
               a: ({node, ...props}) => <Link href={String(props.href)} target={"_blank"} {...props}/>,
               h1: ({node, ...props}) => <h1 className={s.customH1} {...props}/>,
               p: ({node, ...props}) => <p className={s.desc} {...props} />,
               strong: ({node, ...props}) => <strong className={s.customStrong} {...props} />,
               ul: ({node, ...props}) => <ul className={s.customUl} {...props}/>,
               ol: ({node, ...props}) => <ol className={s.customOl} type="I" {...props}/>,
               li: ({node, ...props}) => <li className={s.customLi}>
                  {props.children[0]}
               </li>,
               u: ({node, ...props}) => <u {...props}/>,
            }}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
         >
            {DOMpurify.sanitize(desc)}
         </ReactMarkdown>
      </div>
   )
}
