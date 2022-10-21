import { Opaque } from "../Basic";

export type Id = Opaque<string, typeof __Id>; declare const __Id: unique symbol;
export type Login = Opaque<string, typeof __Login>; declare const __Login: unique symbol;
export type Password = Opaque<string, typeof __Password>; declare const __Password: unique symbol;
export type PlainPassword = Opaque<string, typeof __PlainPassword>; declare const __PlainPassword: unique symbol;
export type PrivateData = Opaque<string, typeof __PrivateData>; declare const __PrivateData: unique symbol;
export type Role = "unauthorized" | "authorized" | "admin";

export interface User {
    id: Id;
    login: Login;
    password: Password;
    role: Role;
    privateData: PrivateData | null;
    lastPasswordUpdateTimestamp: number;
}

export type Users = User[];
export type UserPublic = Omit<User, "password" | "privateData" | "lastPasswordUpdateTimestamp">;
export type UsersPublic = UserPublic[];
export type UserWithoutPassword = Omit<User, "password">;
