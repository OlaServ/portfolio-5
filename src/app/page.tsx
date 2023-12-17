import { Hero } from '@/components/hero/hero';
import { getMainPage } from '@/utils/sanity/queries/get-main-page';
import { Blur } from '@/components/blur/blur';

export default async function Home() {
	const data = await getMainPage();

	return (
		<main>
			<Hero data={data[0]} />
			<Blur />
		</main>
	);
}
