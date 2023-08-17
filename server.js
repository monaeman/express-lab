const express = require("express");

const app = express();
const port = 5001;

app.get("/greeting/:name", function (req, res) {
  const name = req.params.name;
  const greetings = [
    `<h1>Hello, ${name}!</h1>`,
    `<h1>What's up, ${name}?</h1>`,
    `<h1>${name}! It's so great to see you!</h1>`,

  ];
  res.send(greetings${name});

  app.get("/:id", (req, res) => {
    const id = req.params.id;
    if (greetings[id] !== undefined) {
      res.send(greetings[id]);
    } else {
      res.send(`Cannot find anything at this index: ${id}`);
    }
  });
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);

  const tipAmount = (total * tipPercentage) / 100;
  res.send(`Your tip amount is: $${tipAmount}`);
});

const magic8Ball = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question; // Replace %20 with spaces
  const response = magic8Ball[Math.floor(Math.random() * magic8Ball.length)];

  res.send(`
      <h1>Your Question: ${question}</h1>
      <h1>Magic 8 Ball Response: ${response}</h1>
    `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
