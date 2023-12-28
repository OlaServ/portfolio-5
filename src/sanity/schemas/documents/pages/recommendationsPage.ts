export default {
	name: 'recommendationsPage',
	title: 'Recommendations',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		},

		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
		},

		{
			name: 'recommendations',
			title: 'Recommendations',
			type: 'array',
			of: [
				{
					type: 'recommendation',
				},
			],
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
		},
	},
};
