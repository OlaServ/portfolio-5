import { TbCarouselVertical } from 'react-icons/tb';

export default {
	name: 'accordion',
	title: 'Accordion',
	type: 'object',
	icon: TbCarouselVertical,
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Main Heading',
		},

		{
			name: 'body',
			title: 'Body',
			type: 'object',
			options: {
				collapsible: false,
			},
			fields: [
				{
					name: 'bodyHeading',
					type: 'text',
					title: 'Body Heading',
					rows: 3,
				},

				{
					name: 'listItems',
					type: 'array',
					title: 'ListItems',
					of: [
						{
							type: 'string',
						},
					],
				},
			],
		},
		{ name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' },
	],
};
