# kubb-minimal-repro

- Run `kubb` to generate the Zod schemas from the OpenAPI schema:

  ```bash
  pnpm kubb
  ```

- This produces `gen/validation/createTestRequestSchema.ts` which contains:

  ```ts
  export const createTestRequestSchema = z.object({
    content: z
      .object({})
      .and(z.lazy(() => testContentSchema))
      .nullish(),
    name: z.lazy(() => testNameSchema),
  });
  ```

  The `content` field is parsed as a Zod object but the `name` field is not
