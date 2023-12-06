"use client";
import { HeroElements as el } from "./hero.elements";
import { Typography } from "../typography/typography";
import { FlexProps, Spinner } from "@chakra-ui/react";
import { SanityImageAssetDocument } from "next-sanity";
import { createSanityImageUrl } from "@/utils/sanity/image-builder";
import { useEffect } from "react";

interface IHeroProps extends FlexProps {
  data: {
    heading: string;
    bodyText: string;
    mainImage: SanityImageAssetDocument;
  } | null;
}

export const Hero = ({ data, ...rest }: IHeroProps) => {
  return (
    <el.Container {...rest}>
      {data ? (
        <>
          {" "}
          <el.TextContainer>
            <Typography type="h1">{data.heading}</Typography>
            <Typography type="p">{data.bodyText}</Typography>
          </el.TextContainer>
          <el.Photo src={createSanityImageUrl(data.mainImage).url()} />
        </>
      ) : (
        <Spinner size="xl" />
      )}
    </el.Container>
  );
};
