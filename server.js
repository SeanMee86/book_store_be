const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(
    express.json(),
    express.urlencoded({extended: false}),
    cors()
)

app.route('/').get((req, res) => {
    const books = [
        {
            bkTitle: "In Search of Time Lost",
            rating: 4,
            author: "Marcel Proust",
            excerpt: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. The narr..."
        },
        {
            bkTitle: "Ulysses",
            rating: 5,
            author: "James Joyce",
            excerpt: "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss..."
        },
        {
            bkTitle: "Don Quixote",
            rating: 3.5,
            author: "Miguel de Cervantes",
            excerpt: "Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes th..."
        },
        {
            bkTitle: "One Hundred Years of Solitude",
            rating: 4.7,
            author: "Gabriel Garcia Marquez",
            excerpt: "One of the 20th century's enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car..."
        },
        {
            bkTitle: "The Great Gatsby",
            rating: 100,
            author: "F. Scott Fitzgerald",
            excerpt: "The novel chronicles an era that Fitzgerald himself dubbed the \"Jazz Age\". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the \"roar..."
        }
    ]
    res.send(JSON.stringify(books));
})

app.listen(port, () => console.log(`listening on port: ${port}`));