import * as data from "../data";

export interface CreateSessionRequest {
    userLogin: data.user.Login;
    userPassword: data.user.PlainPassword;
}
export interface CreateSessionResponse {
    id: data.session.Id;
    user: data.user.UserWithoutPassword;
}

export interface DeleteSessionRequest {
}
export interface DeleteSessionResponse {
}

export interface UpdateSessionRequest {
}
export interface UpdateSessionResponse {
}
