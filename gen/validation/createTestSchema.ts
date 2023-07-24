import { z } from "zod";

import { createTestRequestSchema } from "./createTestRequestSchema";
import { createTestResponseSchema } from "./createTestResponseSchema";
import { testIdSchema as testIdSchema2 } from "./testIdSchema";

export const createTestMutationRequestSchema = z.lazy(() => createTestRequestSchema);

      /**
       * @description Successfully created Test with ID
       */
export const createTestMutationResponseSchema = z.lazy(() => createTestResponseSchema);
export const createTestPathParamsSchema = z.object({"test_id": z.lazy(() => testIdSchema2)});