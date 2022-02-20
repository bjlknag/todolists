const quotes = [
    {
        qoute: "You may delay, but time will not.",
        author: "Benjamin Franklin",
    },
    {
        qoute: "When your work speaks for itself, don't interrupt.",
        author: "Henry J. Kaiser",
    },
    {
        qoute: "Humility is not a virtue.",
        author: "Unknown",
    },
    {
        qoute: "Every failure is a step to success.",
        author: "William Whewell",
    },
    {
        qoute: "The price of greatness is responsibility.",
        author: "Winston Churchill",
    },
    {
        qoute: "With great power comes great responsibility.",
        author: "Uncle Ben",
    },
    {
        qoute: "Man is what he reads.",
        author: "Joseph Brodsky",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const inquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = inquote.qoute;
author.innerText = inquote.author;
