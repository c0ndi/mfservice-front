import {StrapiImageArray} from "@/types/types";
import {strapiURL} from "@/config/axios";

export function getSimpleImageUriArray(image: StrapiImageArray){
   return strapiURL + image.attributes.url
}