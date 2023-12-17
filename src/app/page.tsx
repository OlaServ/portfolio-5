import { Hero } from '@/components/hero/hero';
import { getMainPage } from '@/utils/sanity/queries/get-main-page';
import { Accordion } from '@/components/accordion/accordion';
import { AccordionsContainer } from '@/modules/accordions-container/accordions-container';

export default async function Home() {
	const data = await getMainPage();

	return (
		<main>
			<Hero data={data[0]} />
		</main>
	);
}
