import { defineField, defineType, type SchemaPluginOptions } from "sanity";

export const schema: SchemaPluginOptions = {
  types: [
    defineType({
      name: "post",
      type: "document",

      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
};
