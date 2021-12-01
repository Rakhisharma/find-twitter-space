export interface Value {
    id: string;
    value: string;
}

export interface GroupValue {
    title: string;
    items: Array<Value>;
}
