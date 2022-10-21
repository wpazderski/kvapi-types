import * as request from "./request";

export interface BatchedRequest {
    method: request.Method;
    url: string;
    data?: any;
}

export interface BatchedResponse {
    statusCode: number;
    statusText: string;
    response: string;
}

export interface Request {
    batchedRequests: BatchedRequest[];
}

export interface Response {
    batchedResponses: BatchedResponse[];
}
