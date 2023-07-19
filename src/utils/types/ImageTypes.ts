import { StaticImageData } from "next/image";

export type ImageType = {
  id: number;
  url: string;
  title?: string;
  //TODO: ad portrait orientation to JSON file and remove jumbotronUrl , image.jumbtronUrl
  portrait?: boolean;
  jumbotronUrl?: string;
};

//NOTE: Probably temporary json ImageType
export type ImageTypeJSON = {
  id: number | string;
  url: string | StaticImageData;
  title?: string;
};
