"use client";
import { HeroElements as el } from "./hero.elements";
import { Typography } from "../typography/typography";
import { FlexProps } from "@chakra-ui/react";
import { SanityImageAssetDocument } from "next-sanity";
import { createSanityImageUrl } from "@/utils/sanity/image-builder";

interface IHeroProps extends FlexProps {
  data: {
    headingLineOne: string;
    headingLineTwo: string;
    bodyText: string;
    mainImage: SanityImageAssetDocument;
    secondaryImage: SanityImageAssetDocument;
  };
}

export const Hero = ({ data, ...rest }: IHeroProps) => {
  return (
    <el.Container {...rest}>
      <el.TextContainer>
        <Typography type="h1" mb="1vw">{data.headingLineOne}</Typography>
        <Typography type="h1" mb="1vw">{data.headingLineTwo}</Typography>
        <Typography type="p">{data.bodyText}</Typography>
      </el.TextContainer>
      <el.Photo src={createSanityImageUrl(data.mainImage).url()} />
    </el.Container>
  );
};
