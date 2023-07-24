import { z } from "zod";

import { testIdSchema as testIdSchema1 } from "./testIdSchema";

export const createTestResponseSchema = z.object({"test_id": z.lazy(() => testIdSchema1)});