import * as data from "../data";

export interface IdParams {
    id: data.user.Id;
}

export interface GetUsersRequest {
}
export interface GetUsersResponse {
    users: data.user.UsersPublic;
}

export interface GetUserRequest {
}
export interface GetUserResponse {
    user: data.user.UserPublic | data.user.UserWithoutPassword;
}

export interface CreateUserRequest {
    login: data.user.Login;
    password: data.user.PlainPassword;
    role: data.user.Role;
}
export interface CreateUserResponse {
    user: data.user.UserPublic;
}

export interface UpdateUserRequest {
    login?: data.user.Login;
    password?: data.user.PlainPassword;
    role?: data.user.Role;
    privateData?: data.user.PrivateData;
}
export interface UpdateUserResponse {
    user: data.user.UserPublic | data.user.UserWithoutPassword;
}

export interface DeleteUserRequest {
}
export interface DeleteUserResponse {
}
