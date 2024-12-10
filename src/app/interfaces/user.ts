import { Book } from "./book";

export interface User {
    _id: Object;
    username: string;
    password: string;
    role: string;
    amountOwed: number;
    books: Book[]
}
