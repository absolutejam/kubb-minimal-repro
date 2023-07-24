import { z } from "zod";

import { testContentSchema } from "./testContentSchema";
import { testNameSchema } from "./testNameSchema";

export const createTestRequestSchema = z.object({"content": z.object({}).and(z.lazy(() => testContentSchema)).nullish(),"name": z.lazy(() => testNameSchema)});