import { client } from '../client';
import { RecommendationPageDataType } from '@/domain/pages/recommendations-page';

export const getRecommendationsPage =
	async (): Promise<RecommendationPageDataType> => {
		const res = await client.fetch("*[_type == 'recommendationsPage']");

		if (!res) {
			throw new Error('Failed to fetch data');
		}
		return res;
	};
