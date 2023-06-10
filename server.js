const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000

// Middleware
app.use(bodyParser.json());

let books = [
  {
    id: 1,
    name: "Book 1",
    author: "Kamal",
    price: "RS. 100",
  },
  {
    id: 2,
    name: "Book 2",
    author: "Nimal",
    price: "RS. 200",
  },
];


app.get("/", function (req, res) {
    res.json({
        message: "This a books api"
    })
})

app.get("/books", function (req, res) {
  res.json(books);
});

app.get("/books/:id", function (req, res) {
  res.json(books.find((book) => book.id == req.params.id));
});

app.post("/books", function (req, res) {
    books.push(req.body);
    res.status(200).json({
      success: true,
      message: `${req.body.name} created successfully`,
    });
})

app.put("/books/:id", function (req, res) {
    const bookId = req.params.id;

    books = books.map((book) => {
      if (book.id == bookId) {
        book = req.body;
        console.log("working")
      }

      return book;
    });

    res.status(200).json(books.find((book) => book.id == req.params.id));
})

app.delete("/books/:id", function (req, res) {

    books = books.filter(book => book.id != req.params.id)

    res.status(200).json({ message: "Successfully deleted", data: books });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});