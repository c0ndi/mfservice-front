import axios from '@/config/axios';

export async function getData(url: string, slug?: string | string[]) {
   const query = slug ? `?&filters[slug][$eq]=${slug}&populate=deep` : '?populate=deep';
   const res = await axios.get(`${url + query}`)

   return res.data;
}