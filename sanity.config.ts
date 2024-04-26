import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { exampleInspector } from "./inspectors/example";
import { schema } from "./schema";

export default defineConfig({
  title: "Custom Document Inspector (Example)",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema,

  document: {
    inspectors(prev, { documentType }) {
      if (["post"].includes(documentType)) {
        return prev.concat(exampleInspector);
      }

      return prev;
    },
  },
});
