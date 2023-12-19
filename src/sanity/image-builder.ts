import { SanityImageAssetDocument } from "next-sanity";
import { client } from "./client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function createSanityImageUrl(source: SanityImageAssetDocument) {
    return builder.image(source)
  }