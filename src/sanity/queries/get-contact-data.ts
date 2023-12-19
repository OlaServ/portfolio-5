import { ContactDataType } from '@/domain/contact-data';
import { client } from '../client';

export async function getContactData(): Promise<ContactDataType[]> {
	const contactData = await client.fetch<ContactDataType[]>(
		"*[_type == 'contactData']",
	);
	return contactData;
}
