import {StrapiImage} from "@/types/types";
import {strapiURL} from "@/config/axios";

export function getSimpleImageUri(image: StrapiImage){
   return strapiURL + image.data.attributes.url
}