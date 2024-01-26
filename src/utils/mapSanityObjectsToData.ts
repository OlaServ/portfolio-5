import { AccordionDataType } from '@/domain/accordion';
import { IAccordionProps } from '@/components/accordion/accordion';
import { createSanityImageUrl } from '@/sanity/image-builder';
import { SanityImageAssetDocument } from 'next-sanity';
import { MainPageDataType } from '@/domain/pages/main-page';
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
			recommendationCardButtonUrl,
		} = sanityDataItem;

		return {
			headingLineOne,
			headingLineTwo,
			bodyText,
			mainImage: createSanityImageUrl(mainImage).url(),
			secondaryImage: createSanityImageUrl(secondaryImage).url(),
			recommendationCardText,
			recommendationCardButtonText,
			recommendationCardButtonUrl,
		};
	};

	static mapSanityAccordions = (
		accordions: AccordionDataType[],
	): IAccordionProps[] => {
		return accordions.map((accordionItem) => {
			return {
				heading: accordionItem.heading,
				body: {
					heading: accordionItem.body.bodyHeading,
					listItems: accordionItem.body.listItems,
				},
				imageUrls: accordionItem.images.map((image: SanityImageAssetDocument) =>
					createSanityImageUrl(image).url(),
				),
			};
		});
	};
}
