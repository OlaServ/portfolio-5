"use client";
import { HeroElements as el } from "./hero.elements";
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
  const {
    headingLineOne,
    headingLineTwo,
    bodyText,
    mainImage,
    secondaryImage,
  } = data;
  return (
    <el.Container {...rest}>
      <el.LeftColumn>
        <el.TextContainer>
          <el.HeadingOne type="h1">{headingLineOne}</el.HeadingOne>
          <el.HeadingTwo type="h1">{headingLineTwo}</el.HeadingTwo>
          <el.Body type="p">{bodyText}</el.Body>
        </el.TextContainer>
      </el.LeftColumn>
      <el.RightColumn>
        <el.MainPhoto
          backgroundImage={`url(${createSanityImageUrl(mainImage).url()})`}
        />
        <el.SecondaryPhoto src={createSanityImageUrl(secondaryImage).url()} />
      </el.RightColumn>
    </el.Container>
  );
};
