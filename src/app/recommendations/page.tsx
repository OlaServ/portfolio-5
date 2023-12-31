import { RecommendationsContainer } from '@/modules/recommendations-container/recommendations-container';
import { getRecommendationsPage } from '@/sanity/queries/get-recommendations-page';
import { Blur } from '@/components/blur/blur';

export default async function RecommendationsPage() {
	const data = await getRecommendationsPage();
	const recommendationsPageData = data[0];

	return (
        <>
        <Blur  top="0" w="100%" zIndex="100"/>
		<main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
           
			<RecommendationsContainer
            zIndex="1"
            mt="400px"
				recommendations={recommendationsPageData.recommendations}
			/>
           
		</main>
        </>
	);
}
