"use client";
import { HeroElements as el } from "./hero.elements";
import { Typography } from "../typography/typography";

export const Hero = () => {
  return (
    <el.Container>
        <el.TextContainer>
      <Typography type="h1">I am a front-end developer.</Typography>
      <Typography type="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla, laboriosam quo consectetur possimus blanditiis veniam voluptatibus totam, provident odit dolorem. Sed soluta rem similique eaque est eligendi at alias!</Typography>
      </el.TextContainer>
      <el.Photo src="/assets/images/ola1.jpg" />
    </el.Container>
  );
};
