import { AccordionDataType } from '@/domain/accordion';
import { IAccordionProps } from '@/components/accordion/accordion';
import { createSanityImageUrl } from './sanity/image-builder';
import { SanityImageAssetDocument } from 'next-sanity';
import { MainPageDataType } from '@/domain/main-page';
import { IHeroData } from '@/components/hero/hero';

export abstract class MapSanityObjectsToData {
	static mapSanityHero = (data: MainPageDataType): IHeroData => {
		const sanityDataItem = data[0];

		const {
			headingLineOne,
			headingLineTwo,
			bodyText,
			mainImage,
			secondaryImage,
			recommendationCardText,
			recommendationCardButtonText,
		} = sanityDataItem;

		return {
			headingLineOne,
			headingLineTwo,
			bodyText,
			mainImage: createSanityImageUrl(mainImage).url(),
			secondaryImage: createSanityImageUrl(secondaryImage).url(),
			recommendationCardText,
			recommendationCardButtonText,
		};
	};

	static mapSanityAccordions = (
		accordions: AccordionDataType[],
	): IAccordionProps[] => {
		return accordions.map((accordionItem) => {
			const { accordion } = accordionItem;
			return {
				heading: accordion.heading,
				body: {
					heading: accordion.body.bodyHeading,
					listItems: accordion.body.listItems,
				},
				imageUrls: accordion.images.map((image: SanityImageAssetDocument) =>
					createSanityImageUrl(image).url(),
				),
			};
		});
	};
}
