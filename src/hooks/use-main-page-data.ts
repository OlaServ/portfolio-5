import { useQuery } from "react-query";
import { getMainPage } from "@/utils/sanity/queries/get-main-page";
import { SanityImageAssetDocument } from "next-sanity";

export type MainPageDataType = [{ bodyText: string; heading: string, mainImage: SanityImageAssetDocument }];

export const useMainPageData = () => {
  const { data, status } = useQuery<MainPageDataType>(
    ["main-page"],
    getMainPage,
    {
      keepPreviousData: true,
      refetchInterval: false,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return { data, status };
};
