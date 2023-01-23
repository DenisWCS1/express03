const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.APP_PORT ?? 51000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
const movieHandlers = require("./movieHandlers");

app.get("/", welcome);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.post("/api/movie", movieHandlers.postMovie);

app.get("/api/allusers", movieHandlers.getUsers);
app.get("/api/user/:id", movieHandlers.getUserById);
app.post("/api/users", movieHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
