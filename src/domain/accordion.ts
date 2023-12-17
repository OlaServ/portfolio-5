import { SanityImageAssetDocument } from 'next-sanity';

export type AccordionDataType = {
	accordion: {
		heading: string;
		body: {
			bodyHeading: string;
			listItems: string[];
		};
		images: SanityImageAssetDocument;
	};
};
