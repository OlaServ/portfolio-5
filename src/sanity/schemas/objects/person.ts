import { FaUser } from 'react-icons/fa';

export default {
	name: 'person',
	title: 'Person',
	type: 'object',
	icon: FaUser,
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'position',
			type: 'string',
			title: 'Position',
		},

		{
			name: 'company',
			type: 'string',
			title: 'Company',
		},
	],
};
