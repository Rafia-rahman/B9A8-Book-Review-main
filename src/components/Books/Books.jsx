import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books,setBooks] = useState ([]);
    useEffect( () =>{
        fetch('/public/Books.json')
        .then(res => res.json())
        .then(data => setBooks(data));

    }, [])
    return (
        <div>
            <div className="text-center">
            <h2 className="text-5xl font-bold text-black">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 rounded-3xl ">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;