import * as data from "../data";

export interface KeyParams {
    key: data.entry.Key;
}

export interface GetEntriesRequest {
}
export interface GetEntriesResponse {
    entries: data.entry.KeyValueMap;
}

export interface GetEntryRequest {
}
export interface GetEntryResponse {
    value: data.entry.Value;
}

export interface CreateOrUpdateEntryRequest {
    value: data.entry.Value;
}
export interface CreateOrUpdateEntryResponse {
}

export interface DeleteEntryRequest {
}
export interface DeleteEntryResponse {
}
