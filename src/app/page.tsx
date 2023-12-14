import { Hero } from '@/components/hero/hero';
import { getMainPage } from '@/utils/sanity/queries/get-main-page';
import { Accordion } from '@/components/accordion/accordion';

export default async function Home() {
	const data = await getMainPage();

	const exampleImages = [
		'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
	];

	return (
		<main>
			<Hero data={data[0]} />
			<Accordion
				w="50%"
				m="100px 20px"
				imageUrls={exampleImages}
				heading="Test"
				body="Test"
			/>
		</main>
	);
}
