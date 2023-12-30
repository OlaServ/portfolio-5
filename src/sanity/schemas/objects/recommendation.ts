import { MdRecommend } from 'react-icons/md';

export default {
	name: 'recommendation',
	title: 'Recommendation',
	type: 'object',
	icon: MdRecommend,
	fields: [
		{
			name: 'author',
			type: 'person',
			title: 'Author',
		},
		{ name: 'company', type: 'string', title: 'Company' },
		{
			name: 'text',
			type: 'text',
			title: 'Recommendation Text',
			rows: 3,
		},
	],

	preview: {
		select: {
			title: 'text',
		},
	},
};
