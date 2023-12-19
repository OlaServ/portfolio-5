import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: "/admin",
    projectId,
    dataset,
    plugins: [
      deskTool({
        structure: (S) =>
          S.list()
            .title("Base")
            .items([
              S.listItem()
                .title("Pages")
                .child(
                  S.list()
                    .title("Pages")
                    .items([
                      S.listItem()
                        .title("Homepage")
                        .child(
                          S.document()
                            .schemaType("homepage")
                            .documentId("homepage")
                            .title("Homepage")
                        ),
                      S.listItem()
                        .title("About Me")
                        .child(
                          S.document()
                            .schemaType("page")
                            .documentId("page")
                            .title("About Me")
                        ),
                      // Add more items here for additional children if needed
                    ])
                ),
            ]),
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  });
