export type Opaque<TPrimary, TUnique extends symbol> = TPrimary & { [P in TUnique]: never };

export type NonNullableProps<T> = {
    [P in keyof T]: NonNullable<T[P]>;
};

export type Timestamp = Opaque<number, typeof __Timestamp>; declare const __Timestamp: unique symbol;
