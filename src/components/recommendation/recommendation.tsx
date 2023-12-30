'use client';
import { RecommendationElements as el } from './recommendation.elements';
import { FlexProps } from '@chakra-ui/react';

interface IRecommendationProps extends FlexProps {}

export const Recommendation = ({...rest} : FlexProps) => {
	return (
		<el.Container {...rest}>
			<el.UpperRow>
				<el.AuthorImage />
				<el.CompanyName>NoA Ignite</el.CompanyName>
			</el.UpperRow>
			<el.LowerRow>
				<el.RecommendationText>
					Despite her seniority, she’s been able to work individually on a
					complex project, build a working relationship with the Scandinavian
					client, and establish trust, which, all together, resulted in the
					contract prolongation for our company.{' '}
				</el.RecommendationText>
                <el.AuthorContainer>
                    <el.AuthorName>Gabriela</el.AuthorName>
                    <el.AuthorPosition> | Manager</el.AuthorPosition>
                </el.AuthorContainer>
			</el.LowerRow>
		</el.Container>
	);
};
