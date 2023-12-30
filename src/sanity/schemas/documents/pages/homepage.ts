export default {
	name: 'homepage',
	title: 'Homepage',
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
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'secondaryImage',
			title: 'Secondary image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'headingLineOne',
			title: 'Heading - line 1',
			type: 'string',
		},

		{
			name: 'headingLineTwo',
			title: 'Heading - line 2',
			type: 'string',
		},

		{
			name: 'bodyText',
			title: 'Body Text',
			type: 'text',
		},

		{
			name: 'recommendationCardText',
			title: 'Recommendation Card Text',
			type: 'string',
		},

		{
			name: 'recommendationCardButtonText',
			title: 'Recommendation Card Button Text',
			type: 'string',
		},

		{
			name: 'accordions',
			title: 'Accordions with Sliding Images',
			type: 'array',
			of: [
				{
					name: 'accordion',
					title: 'Accordion',
					type: 'accordion',
				},
			],
		},
	],

	preview: {
		select: {
			title: 'title',
		},
	},
};
