'use client';
import { HeroElements as el } from './hero.elements';
import { FlexProps } from '@chakra-ui/react';
import { SanityImageAssetDocument } from 'next-sanity';

export interface IHeroData {
	headingLineOne: string;
	headingLineTwo: string;
	bodyText: string;
	mainImage: string;
	secondaryImage: string;
	recommendationCardText: string;
	recommendationCardButtonText: string;
}

export interface IHeroProps extends FlexProps {
	data: IHeroData
}

export const Hero = ({ data, ...rest }: IHeroProps) => {
	const {
		headingLineOne,
		headingLineTwo,
		bodyText,
		mainImage,
		secondaryImage,
		recommendationCardText,
		recommendationCardButtonText,
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
				<el.MainPhoto backgroundImage={`url(${mainImage})`} />

				<el.SecondaryPhoto src={secondaryImage} />
				<el.RecommendationsCard>
					<el.RecommendationCardText>
						{recommendationCardText}
					</el.RecommendationCardText>
					<el.RecommendationsButton>
						{recommendationCardButtonText}
					</el.RecommendationsButton>
				</el.RecommendationsCard>
			</el.RightColumn>
		</el.Container>
	);
};
