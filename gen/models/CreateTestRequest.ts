import type { TestContent } from "./TestContent";
import type { TestName } from "./TestName";

export type CreateTestRequest = {
    content?: (TestContent) | undefined;
    name: TestName;
};
