  import { useState } from "react";
  import { Link } from "react-router-dom";

  interface Book {
    author: string;
    title: string;
    format: string;
    series: string;
    numberInSeries: string;
  }

  export const Library = () => {

    const [books, setBooks] = useState<Book[]>([]);


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const { id, value } = e.currentTarget;
        const newBook = { [id]: value } as Pick<Book, keyof Book>;
        setBooks([...books, newBook]);
      }
    };

    return (
      <div className="library-main">
        <div>Library page</div>
        <input type="text" placeholder="author" id="author" onKeyDown={handleKeyDown} />
        <input type="text" placeholder="title" id="title" onKeyDown={handleKeyDown} />
        <input type="text" placeholder="format" id="format" onKeyDown={handleKeyDown} />
        <input type="text" placeholder="series" id="series" onKeyDown={handleKeyDown} />
        <input type="text" placeholder="numberInSerie" id="numberInSeries" onKeyDown={handleKeyDown} />
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.author} - {book.title} - {book.format} - {book.series} - {book.numberInSeries}
            </li>
          ))}
        </ul>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

