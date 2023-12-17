import { SanityImageAssetDocument } from 'next-sanity';
import { AccordionDataType } from './accordion';

export type MainPageDataType = [
	{
		bodyText: string;
		headingLineOne: string;
		headingLineTwo: string;
		mainImage: SanityImageAssetDocument;
		secondaryImage: SanityImageAssetDocument;
		recommendationCardText: string;
		recommendationCardButtonText: string;
		accordions: AccordionDataType[];
	},
];
