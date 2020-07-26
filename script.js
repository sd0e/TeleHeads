var celebrities = ["David Attenborough", "Kim Kardashian", "Donald Trump", "Oprah Winfrey", "Dwayne Johnson", "Leonardo DiCaprio", "Nicki Minaj", "Justin Bieber", "Taylor Swift", "Eminem", "Madonna", "Ed Sheeran", "Lady Gaga", "Elton John", "Kanye West", "Katy Perry", "Ariana Grande"];

var athletes = ["Lionel Messi", "Christiano Ronaldo", "Michael Jordan", "Serena Williams", "David Beckham", "Usain Bolt", "Muhammad Ali", "Donald Bradman", "Tiger Woods", "Roger Federer", "Michael Schumacher", "Neymar", "Rafael Nadal", "Virat Kohli", "Kylian Mbappe", "Lewis Hamilton", "Tom Brady", "Tyson Fury", "Sergio Ramos", "Eden Hazard", "Anthony Joshua"];

$(document).on('click', '.celebrityOption', function() {
    $('.resultText').text(celebrities[Math.floor(Math.random() * celebrities.length)]);
    $('.result').attr("style", "color: white; background-color: #d66bb3;");
});

$(document).on('click', '.athletes', function() {
    $('.resultText').text(athletes[Math.floor(Math.random() * athletes.length)]);
    $('.result').attr("style", "color: white; background-color: #fcba03;");
});