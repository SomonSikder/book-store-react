
export class BookService {
    async fetchBooks() {
        const result = await fetch("/api/books")
        const books = await result.json()
        return books
    }

    async findBooks(name, author) {
        const res = await fetch("api/books/search", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            author: author,
        }),
        });
        return await res.json();
    }
}
