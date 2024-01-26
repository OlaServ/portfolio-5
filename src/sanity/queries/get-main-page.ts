import { client } from "../client";
import { MainPageDataType } from "@/domain/pages/main-page";


export const getMainPage = async (): Promise<MainPageDataType> => {
  const res = await client.fetch("*[_type == 'homepage']");

  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res;
};
