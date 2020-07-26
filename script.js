$(document).ready(function(){
    $(".celebrityOption").click(function(){
        $('.resultText').text(celebrities[Math.floor(Math.random() * celebrities.length)]);
    });
});

var celebrities = ["David Attenborough", "Kim Kardashian", "Donald Trump", "Oprah Winfrey", "Dwayne Johnson", "Leonardo DiCaprio", "Nicki Minaj", "Justin Bieber", "Taylor Swift", "Eminem", "Madonna", "Ed Sheeran", "Lady Gaga", "Elton John", "Kanye West", "Katy Perry", "Ariana Grande"];