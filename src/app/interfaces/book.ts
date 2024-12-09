export interface Book {
    _id: Object;
    title: String;
    isbn: Number;
    pageCount: Number;
    publishedDate: Date;
    thumbnailUrl: String;
    description: String;
    reserved: Boolean;
    price: Number;
    authors: String[];
    categories: String[];
}
