var celebrities = ["David Attenborough", "Kim Kardashian", "Donald Trump", "Oprah Winfrey", "Dwayne Johnson", "Leonardo DiCaprio", "Nicki Minaj", "Justin Bieber", "Taylor Swift", "Eminem", "Madonna", "Ed Sheeran", "Lady Gaga", "Elton John", "Kanye West", "Katy Perry", "Ariana Grande", "Adele", "Drake", "Kanye West", "David Bowie", "John Lennon"];

var athletes = ["Lionel Messi", "Christiano Ronaldo", "Michael Jordan", "Serena Williams", "David Beckham", "Usain Bolt", "Muhammad Ali", "Donald Bradman", "Tiger Woods", "Roger Federer", "Michael Schumacher", "Neymar", "Rafael Nadal", "Virat Kohli", "Kylian Mbappe", "Lewis Hamilton", "Tom Brady", "Tyson Fury", "Sergio Ramos", "Eden Hazard", "Anthony Joshua"];

var musicGroups = ["The Beatles", "The Rolling Stones", "Pink Floyd", "AC/DC", "The Spice Girls", "Queen", "ABBA", "Maroon 5", "INXS", "The Beach Boys", "U2", "The Clash", "Jackson 5", "Coldplay", "Red Hot Chili Peppers", "Bon Jovi", "Aerosmith", "Metallica", "Linkin Park"];

var politicians = ["Angela Merkel", "Donald Trump", "Barack Obama", "George W. Bush", "Boris Johnson", "Nicola Sturgeon", "Winston Churchill", "William Shakespeare", "Abraham Lincoln", "Jesus Christ", "Isaac Newton", "Johannes Gutenberg", "Christopher Columbus", "Albert Einstein", "Margaret Thatcher", "Louis XIV", "Elizabeth II (Queen of England)", "Franklin Roosevelt", "Ronald Reagan", "John F. Kennedy", "Nelson Mandela", "Joe Biden", "Martin Luther King Jr.", "Arnold Schwarzenegger", "George Washington", "Vladimir Putin", "Alexander Hamilton", "Hillary Clinton", "Amelia Earhart", "Leonardo da Vinci", "Marie Curie", "Muhammad", "Benjamin Franklin"];

var movies = ["Airplane", "The Simpsons", "Spongebob Squarepants", "Star Wars", "Titanic", "Jaws", "E.T.", "The Wizard of Oz", "The Lord of the Rings", "James Bond", "The Lion King", "Jurassic Park", "Harry Potter", "Forrest Gump", "Shrek", "Avengers", "Toy Story", "Garfield", "Mad Max", "Die Hard", "Laptua: Castle in the Sky", "Nausicaä of the Valley of the Wind", "Home Alone", "Blade Runner", "The Goonies", "The Matrix", "The Shining", "Raiders of the Lost Ark", "Monty Python and the Holy Grail", "Game of Thrones", "Breaking Bad", "Seinfeld", "Curb Your Enthusiasm", "Futurama", "Lost", "The Office", "The Daily Show", "Antiques Roadshow", "Jeopardy!", "The Chase", "Who Wants to be a Millionaire", "House Hunters", "The Oprah Winfrey Show", "Dr. Phil", "The Muppet Show", "The Fresh Prince of Bel-Air", "Friends", "Full House", "Doctor Who", "The Americans", "Wipeout", "American Ninja Warrior", "Shark Tank/Dragons' Den"];

var books = ["Garfield", "To Kill a Mockingbird", "The Great Gatsby", "Of Mice and Men", "A Tale of Two Cities", "Harry Potter and the Philosopher's Stone", "The Little Prince", "The Lion, the Witch and the Wardrobe", "Charlotte's Web", "The Maze Runner", "Farenheit 451", "Goosebumps", "Peter Rabbit", "Diary of a Wimpy Kid", "The Lord of the Rings", "Clifford the Big Red Dog"];

$(document).on('click', '.celebrityOption', function() {
    $('.resultText').text(celebrities[Math.floor(Math.random() * celebrities.length)]);
    $('.result').attr("style", "color: white; background-color: #d66bb3;");
});

$(document).on('click', '.athletes', function() {
    $('.resultText').text(athletes[Math.floor(Math.random() * athletes.length)]);
    $('.result').attr("style", "color: white; background-color: #fcba03;");
});

$(document).on('click', '.musicGroups', function() {
    $('.resultText').text(musicGroups[Math.floor(Math.random() * musicGroups.length)]);
    $('.result').attr("style", "color: white; background-color: #ff1c1c;");
});

$(document).on('click', '.politicians', function() {
    $('.resultText').text(politicians[Math.floor(Math.random() * politicians.length)]);
    $('.result').attr("style", "color: white; background-color: #9947cc;");
});

$(document).on('click', '.movies', function() {
    $('.resultText').text(movies[Math.floor(Math.random() * movies.length)]);
    $('.result').attr("style", "color: white; background-color: #e07a3a;");
});

$(document).on('click', '.books', function() {
    $('.resultText').text(books[Math.floor(Math.random() * books.length)]);
    $('.result').attr("style", "color: white; background-color: #8a2000;");
});

$(document).on('click', '.random', function() {
    randomChoice();
});

function randomChoice() {
    var choiceNumber = Math.floor(Math.random() * 6);
    console.log(choiceNumber);
    if (choiceNumber == 0) {
        $('.resultText').text(celebrities[Math.floor(Math.random() * celebrities.length)]);
        $('.result').attr("style", "color: white; background-color: #d66bb3;");
    } else if (choiceNumber == 1) {
        $('.resultText').text(athletes[Math.floor(Math.random() * athletes.length)]);
        $('.result').attr("style", "color: white; background-color: #fcba03;");
    } else if (choiceNumber == 2) {
        $('.resultText').text(musicGroups[Math.floor(Math.random() * musicGroups.length)]);
        $('.result').attr("style", "color: white; background-color: #ff1c1c;");
    } else if (choiceNumber == 3) {
        $('.resultText').text(politicians[Math.floor(Math.random() * politicians.length)]);
        $('.result').attr("style", "color: white; background-color: #9947cc;");
    } else if (choiceNumber == 4) {
        $('.resultText').text(movies[Math.floor(Math.random() * movies.length)]);
        $('.result').attr("style", "color: white; background-color: #e07a3a;");
    } else if (choiceNumber == 5) {
        $('.resultText').text(books[Math.floor(Math.random() * books.length)]);
        $('.result').attr("style", "color: white; background-color: #8a2000;");
    }
}