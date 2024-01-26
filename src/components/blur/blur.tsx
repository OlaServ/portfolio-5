'use client';
import { BoxProps } from '@chakra-ui/react';
import { BlurElements as el } from './blur.elements';

export const Blur = ({...rest} : BoxProps) => {
	return <el.BlurBox {...rest}/>;
};
