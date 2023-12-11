import { SanityImageAssetDocument } from "next-sanity";
export type MainPageDataType = [
  {
    bodyText: string;
    headingLineOne: string;
    headingLineTwo: string;
    mainImage: SanityImageAssetDocument;
    secondaryImage: SanityImageAssetDocument;
  },
];
