import { IImages } from "./";

export interface IMovie {
  title: string;
  description: string;
  images: IImages;
  releaseYear: number;
}
