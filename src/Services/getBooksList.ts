const alphabet = "abcdefghijklmnopqrstuvwxyz"

const url = `https://www.googleapis.com/books/v1/volumes?q=${alphabet[Math.floor(Math.random() * alphabet.length)]}`

export default url;
