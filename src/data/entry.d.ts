import { Opaque } from "../Basic";

export type Key = Opaque<string, typeof __Key>; declare const __Key: unique symbol;
export type Value = Opaque<string, typeof __Value>; declare const __Value: unique symbol;

export interface KeyValuePair {
    key: Key;
    value: Value;
}

export interface KeyValueMap {
    [key: Key]: Value;
}

export type KeyValueTuple = [Key, Value];

export type EntryAccess = "public" | "private";
