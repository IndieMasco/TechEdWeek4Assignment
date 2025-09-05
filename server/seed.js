// Extra data that can be sent to the database

import { db } from "./dbConnection.js";

db.query(
  `INSERT INTO PawsomeDaycare (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
  [
    "Laura Davis",
    "Charlie",
    "charlie.labradoodle@gmail.com",
    "I'm so impressed with the level of cleanliness and care at this facility. My Labradoodle, Charlie, has a sensitive stomach, and the team here is always careful to follow his feeding instructions to the letter. It's a professional and loving environment.",
  ]
);
db.query(
  `INSERT INTO PawsomeDaycare (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
  [
    "James Wilson",
    "Scout",
    "scout.the.puppy@gmail.com",
    "My puppy, Scout, loves coming here. Not only does she get to play all day, but they also incorporate some basic training exercises into the fun. She's a much more well-behaved dog at home now. It's great to know her mind and body are being exercised.",
  ]
);
