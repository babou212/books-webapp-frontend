import { Book } from "./book";

export interface User {
    _id: Object;
    userName: String;
    password: String;
    role: String;
    amountOwed: Number;
    Books: Book[]
}
