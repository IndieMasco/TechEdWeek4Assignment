import { db } from "./dbConnection.js";

db.query(
  `INSERT INTO games (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
  [
    "Emily Carter",
    "Winston",
    "winston.bulldog@gmail.com",
    "It's an incredible feeling when your pet gets excited to go somewhere. My bulldog, Winston, starts wagging his tail as soon as we turn onto their street. He's made so many new friends, and I can tell he's truly enjoying himself. Thank you, Pawsome Daycare!",
  ]
);
