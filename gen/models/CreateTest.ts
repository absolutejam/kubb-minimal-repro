import type { CreateTestRequest } from "./CreateTestRequest";
import type { CreateTestResponse } from "./CreateTestResponse";
import type { TestId } from "./TestId";

export type CreateTestMutationRequest = CreateTestRequest;

/**
* @description Successfully created Test with ID
*/
export type CreateTestMutationResponse = CreateTestResponse;

export type CreateTestPathParams = {
    test_id: TestId;
};
