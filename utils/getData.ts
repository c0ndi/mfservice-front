import axios from '@/config/axios';

export async function getData(url: string) {
   const res = await axios.get(`${url}?populate=deep`)

   return res.data;
}