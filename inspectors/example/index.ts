import { LemonIcon } from "@sanity/icons";
import { lazy } from "react";
import type { DocumentInspector } from "sanity";

export const exampleInspector: DocumentInspector = {
  name: "example",
  useMenuItem: () => ({
    title: "Example",
    // If `false`, the inspector will be in the dropdown menu
    showAsAction: true,
    icon: LemonIcon,
  }),
  component: lazy(() => import("./ExampleInspector")),
};
