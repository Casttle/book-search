const mongoose = require("mongoose");
const db = require("../model");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
      },
      {
        authors: ["John Ronald Reuel Tolkien"],
        description: "Fantasy fiction. When they were first published, THE HOBBIT and THE LORD OF THE RINGS became instant classics. Treasured by readers young and old, these works of sweeping fantasy, steeped in unrivalled magic and otherworldliness have sold more than 150 million copies around the world. This new boxed set contains both titles and features brand new cover designs. It offers readers a new opportunity to discover Tolkien's remarkable world of Middle-earth and to follow the complete story of Bilbo Baggins and the Hobbits' part in the epic quest for the Ring beginning with Bilbo's fateful visit from Gandalf and culminating in the dramatic climax between Frodo and Gollum atop Mount Doom.",
        image: "https://books.google.com/books/content?id=f3q6mwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73RD1ymjO-83wPAOd6zx48swKyL5gDIiZQ-7VO07GqhKwmvq6F6p26UbfXFcpNVisT6YPs0d4Q2-R6TxloR50YYqQjs6MDlkVPnupvMKSjujSoUSmDoGNIsy7kW_TXdCfl8oSK3",
        link: "https://books.google.com/books?id=f3q6mwEACAAJ&dq=lord+of+the+rings&hl=en&sa=X&ved=0ahUKEwjxge_4ra3fAhUiwYMKHRlMDlkQ6AEIKjAA",
        title: "The Fellowship of the Ring"
      },
      {
        authors: ["Drew Daywalt"],
        description: "A laugh-out-loud funny new children's book from the author of The Day the Crayons Quit. The Legend of Rock Paper Scissors reveals the epic tale behind everyone's favourite playground game! You've played the game...now read the book. Long ago in the Kingdom of Backgarden lived a fearsome warrior named ROCK. ROCK was undefeated in battle, and yet, he felt unfulfilled. So he went in search of a worthy opponent. Little did he know that at that very moment two more warriors were setting forth with the very same idea. When ROCK collides with SCISSORS from the village of Junk Drawer, and the ferocious PAPER, who hails from the Empire of Mum's Study, an epic and hilarious battle ensues. And the rest, as they say, is history. A riotously funny new picture book from the author of The Day the Crayons Quit and The Day the Crayons came Home, Drew Daywalt, and New York Times bestselling illustrator, Adam Rex. Suggested reading age 4+",
        image: "https://books.google.com/books/content?id=7_VhAQAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72PQHhqzx7I3IVlepHOgekIOE6m5El4RCR0hJsiFaCVnIVS-FWkH36lo_CkyG3VjEDMQCxhjn5hM92TUVJslx4GOTkJSLVyqj3U5MhcpmsbMRhMxrFKmvhETqzH9sio2JntvDKA",
        link: "https://books.google.com/books?id=7_VhAQAACAAJ&dq=rock+paper+scissors&hl=en&sa=X&ved=0ahUKEwj0u-_5vK3fAhVk44MKHQGHCXwQ6AEIMDAB",
        title: "The Legend of Rock, Paper, Scissors"
      },
      {
        authors: ["Dr. Emma Byrne"],
        description: "Did you know that chimpanzees can swear? Or that we do most of our swearing in our first language? Have you ever noticed that swearing is an excellent painkiller? In delightfully fun and accessible language, backed by riveting historical case studies and the latest cutting-edge research, Dr. Emma Byrne explores the science behind swearing and why bad language might actually be good for us. Swearing, it turns out, is socially and emotionally essential. Not only has some form of swearing been around since the earliest humans began to communicate, but it has been shown to reduce physical pain, prevent violence, help stroke victims recover their language, and help people work together as a team. Swearing Is Good For You is a fascinating and fun look at the new science of bad language.",
        image: "https://books.google.com/books/content?id=aTg7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71sEbY6cG0iyqy0lglivgww-yMkVeLRC4q2mtYSS0G9R0ceMorFIfLcP52enrl7YEZxbI1YC_h_Wj-D6YybmoBdNRgZiQgNzym5Ce4b3tSPBOh-wmuRx6k2AVC0dYE6kdtqicSR",
        link: "https://books.google.com/books?id=aTg7DwAAQBAJ&dq=swearing+is+good+for+you&hl=en&sa=X&ved=0ahUKEwjR9Neauq3fAhVs04MKHaNABucQ6AEIMDAB",
        title: "Swearing Is Good For You: The Amazing Science of Bad Language"
      }
];

db.Books
  .remove({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
