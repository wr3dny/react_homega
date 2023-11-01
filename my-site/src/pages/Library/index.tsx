import React, { useState, useEffect } from "react";
// import "./styles.css";

export const Library = () => {
  const [message, setMessage] = useState<string>("");
  const [libraryData, setLibraryData] = useState<any[]>([]); // Define the data state

  // Function to read data from the JSON file
  const loadData = async () => {
    try {
      const response = await fetch("Library/booksData.json");
      if (response.ok) {
        const data = await response.json();
        setLibraryData(data);
      }
    } catch (error) {
      console.error("Error reading data from the JSON file:", error);
    }
  };

  useEffect(() => {
    // Load data from the JSON file when the component mounts
    loadData();
  }, []);

  // Function to write data to the JSON file
  const saveData = () => {
    try {
      const jsonData = JSON.stringify(libraryData, null, 2);
      // You can replace '/path/to/libraryData.json' with the actual file path
      fetch("/path/to/booksData.json", {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error writing data to the JSON file:", error);
    }
  };

  const handleCopy = (message: string) => {
    navigator.clipboard.writeText(message);
  };

  // Function to add a new book to the library data
  const addBook = (newBook: any) => {
    setLibraryData((prevData) => [...prevData, newBook]);
    saveData(); // Save the updated data to the JSON file
  };

  return (
    <div className="library">
      <div>Table of Owned Books</div>
      <table className="library-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Format</th>
            <th>Series</th>
            <th>Volume</th>
            <th>Read</th>
          </tr>
        </thead>
        <tbody>
          {libraryData.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.format}</td>
              <td>{book.series}</td>
              <td>{book.volume}</td>
              <td>{book.read ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => addBook({ title: "New Book", author: "New Author" })}
      >
        Add New Book
      </button>
    </div>
  );
};
