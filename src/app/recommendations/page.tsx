import { RecommendationsContainer } from '@/modules/recommendations-container/recommendations-container';
import { getRecommendationsPage } from '@/sanity/queries/get-recommendations-page';

export default async function RecommendationsPage() {
	const data = await getRecommendationsPage();
	const recommendationsPageData = data[0];

	return (
		<RecommendationsContainer
			zIndex="1"
			w="90%"
			mt="80px"
			alignSelf="center"
			recommendations={recommendationsPageData.recommendations}
			heading={recommendationsPageData.heading}
		/>
	);
}
