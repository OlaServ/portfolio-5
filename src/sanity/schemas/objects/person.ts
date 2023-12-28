import { FaUser } from 'react-icons/fa';

export default {
	name: 'person',
	title: 'Person',
	type: 'object',
	icon: FaUser,
	fields: [
		{
			name: 'personName',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'personPosition',
			type: 'string',
			title: 'Position',
		},
	],
};
