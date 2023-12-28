import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from '@/sanity/schemas';

import { IoIosSettings, IoIosContact } from 'react-icons/io';
import { RiPagesFill } from 'react-icons/ri';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const basePath = '/admin';

export default defineConfig({
	basePath,
	projectId,
	dataset,
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title('Base')
					.items([
						S.listItem()
							.title('Site Config')
							.child(
								S.editor()
									.id('siteConfig')
									.schemaType('siteConfig')
									.documentId('siteConfig'),
							)
							.icon(IoIosSettings),
						S.divider(),
						S.listItem()
							.title('Pages')
							.icon(RiPagesFill)
							.child(
								S.list()
									.title('Pages')
									.items([
										S.listItem()
											.title('Homepage')
											.child(
												S.document()
													.schemaType('homepage')
													.documentId('homepage')
													.title('Homepage'),
											),
										S.listItem()
											.title('Recommendations')
											.child(
												S.document()
													.schemaType('recommendationsPage')
													.documentId('recommendationsPage')
													.title('Recommendations'),
											),
									]),
							),

						S.listItem()
							.title('Contact Data')
							.icon(IoIosContact)
							.child(
								S.document()
									.schemaType('contactData')
									.documentId('contactData')
									.title('Contact Data'),
							),
					]),
		}),
	],
	schema: {
		types: schemaTypes,
	},
});
