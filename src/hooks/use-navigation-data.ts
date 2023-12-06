import { useQuery } from "react-query";
import { getNavigation } from "@/utils/sanity/get-navigation";

type SiteSettingsType = [
  {
    mainNav: {
      items: [
        {
          text: string;
          _key: string;
          navigationItemUrl: { internalLink: { slug: {current: string} } };
        },
      ];
    };
  },
];

export const useNavigationData = () => {
  const { data, status } = useQuery<SiteSettingsType>(
    ["navigation"],
    getNavigation,
    {
      keepPreviousData: true,
    }
  );

  return { data, status };
};
