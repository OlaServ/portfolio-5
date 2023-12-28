import { SanityImageAssetDocument } from 'next-sanity';

export type AccordionDataType = {
	heading: string;
	body: {
		bodyHeading: string;
		listItems: string[];
	};
	images: SanityImageAssetDocument;
};
