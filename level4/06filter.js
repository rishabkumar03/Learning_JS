//FILTER -> it is generally used for getting output as per our required condition from defined array

const frameworks = ["react", "node", "next"]

const values = frameworks.forEach( (item) => {
    console.log(item); 
    return item // FOR EACH completely ignores return values and always returns undefined like this case.
})

console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

const newNums = []

myNums.forEach( (num) => { //heree, using forEach method like filter method  
    if (num > 4) {         //giving conditions
        newNums.push(num)
    }
})
console.log(newNums);

const bookDatabase = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publicationYear: 1925,
        isbn: "9780743273565",
        publisher: "Scribner",
        pages: 180,
        language: "English",
        summary: "A story of the American dream.",
        rating: 4.2,
        availability: "Available"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publicationYear: 1949,
        isbn: "9780451524935",
        publisher: "Secker & Warburg",
        pages: 328,
        language: "English",
        summary: "A totalitarian regime's control.",
        rating: 4.5,
        availability: "Checked out"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationYear: 1960,
        isbn: "9780061120084",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        language: "English",
        summary: "A deep exploration of racial injustice.",
        rating: 4.3,
        availability: "Available"
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        publicationYear: 1951,
        isbn: "9780316769488",
        publisher: "Little, Brown and Company",
        pages: 277,
        language: "English",
        summary: "A teenage boy's experiences in New York.",
        rating: 3.8,
        availability: "Checked out"
    }
];

let userBooks = bookDatabase.filter( (bk) => bk.genre === 'Fiction')

userBooks = bookDatabase.filter( (bk) => {
    return bk.publicationYear >= 1940 && bk.genre === 'Fiction' //here, && operator is used to match our both needs
})
console.log(userBooks);
