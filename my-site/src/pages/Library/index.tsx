import React, { useState, useEffect } from "react";
import data from "./booksData.json";
// import * as fs from "fs";
// import "./styles.css";

console.log(data);

export const Library = () => {
  const [message, setMessage] = useState<string>("");
  const [libraryData, setLibraryData] = useState<any[]>([]); // Define the data state

  // Function to read data from the JSON file
  const loadData = async () => {
    try {
      const response = await fetch("booksData.json");
      if (response.ok) {
        const data = await response.json();
        setLibraryData(data);
      }
    } catch (error) {
      console.error("Error reading data from the JSON file:", error);
    }
  };

  // const fs = require("fs");

  // fs.readFile("sample.json", "utf8", (err: any, data: any) => {
  //   if (err) throw err;
  //   const jsonObject = JSON.parse(data);
  // });

  useEffect(() => {
    // Load data from the JSON file when the component mounts
    loadData();
  }, []);

  // Function to write data to the JSON file
  const saveData = () => {
    try {
      const jsonData = JSON.stringify(libraryData, null, 2);
      // You can replace '/path/to/libraryData.json' with the actual file path
      fetch("booksData.json", {
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

  const [value, setValue] = useState("");
  const onChange = (event: any) => setValue(event.target.value);

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
      <input type="text" value={value} onChange={onChange} />

      <button
        onClick={() => addBook({ title: "New Book", author: "New Author" })}
      >
        Add New Book
      </button>
    </div>
  );
};
