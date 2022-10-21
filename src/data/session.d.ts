import { Opaque } from "../Basic";

export type Id = Opaque<string, typeof __Id>; declare const __Id: unique symbol;
