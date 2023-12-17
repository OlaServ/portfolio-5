import { Hero } from '@/components/hero/hero';
import { getMainPage } from '@/utils/sanity/queries/get-main-page';
import { AccordionsContainer } from '@/modules/accordions-container/accordions-container';
import { Blur } from '@/components/blur/blur';
import { MapSanityObjectsToData } from '@/utils/mapSanityObjectsToData';

export default async function Home() {
	const data = await getMainPage();
	const homepageData = data[0];
	const heroData = MapSanityObjectsToData.mapSanityHero(data);
	const accordions = MapSanityObjectsToData.mapSanityAccordions(
		homepageData.accordions,
	);

	return (
		<main>
			<Hero data={heroData} />
			<Blur />
			<AccordionsContainer data={accordions} />
		</main>
	);
}
