import "./styles.css";
import React, { useState } from "react";

var goodBooks = [
  {
    id: 1,
    name: " Eloquent JavaScript ",
    category: "javascript"
  },
  {
    id: 2,
    name: "Rigved",
    category: "vedas"
  },
  {
    id: 3,
    name: "You Dont Know JS",
    category: "javascript"
  },
  {
    id: 4,
    name: "Harry Potter",
    category: "fun"
  },
  {
    id: 5,
    name: "Atharvaved",
    category: "vedas"
  }
];

export default function App() {
  var [likeBooks, setLikeBooks] = useState("");

  function clickHandler(item) {
    setLikeBooks(item);
  }

  let categories = [];
  for (let i = 0; i < goodBooks.length; i++) {
    if (categories.includes(goodBooks[i].category)) {
    } else {
      categories.push(goodBooks[i].category);
    }
  }
  return (
    <div className="App">
      <h1>📚goodbooks</h1>
      <p>checkout my favourite books. Select a genre to get started</p>

      <div>
        {categories.map((item) => {
          return (
            <button
              onClick={() => {
                clickHandler(item);
              }}
            >
              {item}
            </button>
          );
        })}

        <hr></hr>
        <div>
          {goodBooks.map((item) => {
            if (item.category === likeBooks) {
              return (
                <div>
                  <h3>{item.name}</h3>
                  <hr></hr>
                </div>
              );
            }
            return null;
          })}
        </div>
        {/* <div>Eloquent JavaScript</div> */}
      </div>
    </div>
  );
}
