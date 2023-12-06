import { client } from "./client";

export async function getNavigation() {
    const siteConfig = await client.fetch(
      "*[_type == 'siteConfig']{mainNav-> {items[]{text, navigationItemUrl{_type, internalLink->{title, slug}, title}}}}"
    );
    return siteConfig;
  }
  