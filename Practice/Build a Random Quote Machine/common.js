// 10个诗句例子
var quotes = [{
    "quote": "A boy's best friend is his mother.",
    "author": "- Psycho"
}, {
    "quote": "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    "author": "- Dead Poets Society"
}, {
    "quote": "Political correctness is tyranny with manners.",
    "author": "- Charlton Heston"
}, {
    "quote": "I'm going to make him an offer he can't refuse.",
    "author": "- The Godfather"
}, {
    "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
    "author": "- Sherlock Holmes"
}, {
    "quote": "The stuff that dreams are made of.",
    "author": "- The Maltese Falcon"
}, {
    "quote": "If you can't get rid of the skeleton in your closet, you'd best teach it to dance.",
    "author": "- George Bernard Shaw"
}, {
    "quote": "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    "author": "- King Kong"
}, {
    "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
    "author": "- James Branch Cabell"
}, {
    "quote": "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    "author": "- Caddyshack"
}];
var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
];

function getQuote() {
    var quote = Math.floor(Math.random() * 10);
    var color = Math.floor(Math.random() * colors.length);
    $(".quote").animate({
        opacity: 0
    }, 500, function() {
        $("#text").text(quotes[quote].quote);
        $(this).animate({
            opacity: 1
        }, 500);
    });
    $(".author").animate({
        opacity: 0
    }, 500, function() {
        $(this).text(quotes[quote].author);
        $(this).animate({
            opacity: 1
        }, 500);
    });
    $("body").animate({
        backgroundColor: colors[color],
        color: colors[color]
    }, 1000);
    $(".button").animate({ backgroundColor: colors[color] }, 1000);
}

$(document).ready(function() {
    $("#newquote").on("click", getQuote);
});