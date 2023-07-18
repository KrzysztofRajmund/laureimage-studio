export type ImageType = {
  id: number;
  url: string;
  title?: string;
  //TODO: ad portrait orientation to JSON file and remove jumbotronUrl , image.jumbtronUrl
  portrait?: boolean;
  jumbotronUrl?: string;
};
