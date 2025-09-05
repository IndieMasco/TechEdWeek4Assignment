import { db } from "./dbConnection.js";

db.query(
  `INSERT INTO PawsomeDaycare (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
  [
    "Emily Carter",
    "Winston",
    "winston.bulldog@gmail.com",
    "It's an incredible feeling when your pet gets excited to go somewhere. My bulldog, Winston, starts wagging his tail as soon as we turn onto their street. He's made so many new friends, and I can tell he's truly enjoying himself. Thank you, Pawsome Daycare!",
  ]
);
db.query(
  `INSERT INTO PawsomeDaycare (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
  [
    "Michael Davis",
    "Max",
    "karenthefinalboss@gmail.com",
    "I'm incredibly disappointed with my recent experience. The weather was a bit rainy today, and I understand that dogs will get dirty when they play outside. However, when I picked up my dog, Max, he was absolutely soaked and covered in mud from head to tail. It looked like they made no effort to even towel him off. It was a complete mess and made my car and home filthy. I'm paying for a service that includes basic care, and sending a dog home in that condition shows a complete lack of attention and respect. I had to give him a full bath as soon as we got home. I won't be returning.",
  ]
);
