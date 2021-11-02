const messages = [
    "Kev",
    "Sophi",
    "Schari",
    "Lili",
    "Jhon",
    "Maria",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)]
  console.log(message)
}

module.exports = { randomMsg };