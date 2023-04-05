import {NextApiRequest, NextApiResponse} from "next";

const nodemailer = require('nodemailer');

export default async (req: NextApiRequest, res: NextApiResponse) => {
   const data = req.body;
   let restmessage = "";

   for (const [key, value] of Object.entries(data)) {
      restmessage += `${key}: ${value}<br></br>`;
   }

   try {
      let transporter = nodemailer.createTransport({
         host: "pro2.mail.ovh.net",
         port: process.env.PORT,
         secure: false, // true for 465, false for other ports
         auth: {
            user: 'kontakt@cinead.pl', // generated ethereal user
            pass: '13581321cinead@', // generated ethereal password
         },
      });

      await transporter.sendMail({
         from: `"Kontakt ze strony" <${process.env.MAIL}>`, // sender address
         to: process.env.MAIL, // list of receivers
         subject: "Nowy klient odezwał się do Ciebie!", // Subject line
         html: restmessage, // html body
      });

      res.status(200).end();
   } catch (err) {
      res.status(400).send(err);
   }
}