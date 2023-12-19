import { AiOutlineContacts } from 'react-icons/ai';

/* Todo: validation */

export default {
	name: 'contactData',
	title: 'Contact Data',
	type: 'document',
	icon: AiOutlineContacts,
	fields: [
		{
			name: 'email',
			type: 'string',
			title: 'Email',
		},
		{
			name: 'linkedIn',
			type: 'url',
			title: 'LinkedIn Url',
		},

		{
			name: 'gitHub',
			type: 'url',
			title: 'GitHub Url',
		},
	],
};
