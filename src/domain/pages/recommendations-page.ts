import { RecommendationDataType } from '../recommendation';

export type RecommendationPageDataType = [
	{
		title: string;
		heading: string;
		recommendations: RecommendationDataType[];
	},
];
