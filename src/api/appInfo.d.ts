export interface GetAppInfoRequest {
}
export interface GetAppInfoResponse {
    devMode: boolean;
    hasAnyUsers: boolean;
    sessionMaxInactivityTime: number;
    valueMaxSize: number;
    privateDbMaxNumEntries: number;
    privateDbMaxSize: number;
    disablePublicEntries: boolean;
}
