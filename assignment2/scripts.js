var quotes = [
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'The way to get started is to quit talking and begin doing.',
    'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
    'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success. ',
    'Life is what happens when you\'re busy making other plans.',
    'Spread love everywhere you go. Let no one ever come to you without leaving happier. ',
    'When you reach the end of your rope, tie a knot in it and hang on.',
    'Always remember that you are absolutely unique. Just like everyone else.',
    'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
]
var authors = [
    '- Nelson Mandela',
    '- Walt Disneya',
    '- Steve Jobs',
    '- Eleanor Roosevelt',
    '- Oprah Winfrey',
    '- James Cameron',
    '- John Lennon',
    '- Mother Teresa',
    '- Franklin D. Roosevelt',
    '- Margaret Mead',
    '- Robert Louis Stevenson',
    '- Benjamin Franklin',
]

function changeQuote() {
    var rand = Math.floor(Math.random() * (quotes.length));

    document.getElementById('quoteBody').innerHTML = quotes[rand];
    document.getElementById('quoteAuthor').innerHTML = authors[rand];
}

function convert() {
    var input = parseFloat(document.getElementById('input').value);
    if (!input) input = 0;

    var drop = document.getElementById('select').value;

    if (drop == "lb2kg") {
        var result = input * 0.4536;
        document.getElementById('result').innerHTML = result + " Pounds";
    } else {
        var result = input * 2.2046;
        document.getElementById('result').innerHTML = result + " Kilograms";
    }



}

function button1() {
    document.getElementById("quoteBox").style.backgroundColor = "red";
    document.getElementById("quoteBox").style.borderColor = "whitesmoke";
    document.getElementById("quoteBox").style.color = "yellow";
    document.getElementById("quoteAuthor").style.color = "whitesmoke";
    document.getElementById("quoteAuthor").style.fontFamily = "Helvetica";
    document.getElementById("quoteBox").style.fontFamily = "Helvetica";
}
function button2() {
    document.getElementById("quoteBox").style.backgroundColor = "white";
    document.getElementById("quoteBox").style.borderColor = "#008CBA";
    document.getElementById("quoteBox").style.color = "black";
    document.getElementById("quoteAuthor").style.color = "#008CBA";
    document.getElementById("quoteAuthor").style.fontFamily = "Verdana";
    document.getElementById("quoteBox").style.fontFamily = "Verdana";
}

function button3() {
    document.getElementById("quoteBox").style.backgroundColor = "#36f47f";
    document.getElementById("quoteBox").style.borderColor = "#f44336";
    document.getElementById("quoteBox").style.color = "black";
    document.getElementById("quoteAuthor").style.color = "#f44336";
    document.getElementById("quoteAuthor").style.fontFamily = "Noto";
    document.getElementById("quoteBox").style.fontFamily = "Noto";
}

function button4() {
    document.getElementById("quoteBox").style.backgroundColor = "#181616";
    document.getElementById("quoteBox").style.borderColor = "rgb(219, 205, 6)";
    document.getElementById("quoteBox").style.color = "white";
    document.getElementById("quoteAuthor").style.color = "rgb(219, 205, 6)";
    document.getElementById("quoteAuthor").style.fontFamily = "Century Gothic";
    document.getElementById("quoteBox").style.fontFamily = "Century Gothic";
}


//var series = [];

function seriesInput(inputString) {

    let series = inputString.split(",");

    for (let x in series) {
        series[x] = Number(series[x])
    }

    //console.log(series);

    max(series);
    min(series);
    sum(series);
    avg(series);
    reverseOrder(series);

}

function max(series) {
    //console.log(series);
    //console.log(Math.max(...series));
    document.getElementById('max').innerHTML = Math.max(...series);
}


function min(series) {
    document.getElementById('min').innerHTML = Math.min(...series);
}

function sum(series) {
    const arrSum = arr => arr.reduce((a, b) => a + b, 0);
    document.getElementById('sum').innerHTML = arrSum(series);
}
function avg(series) {
    const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length
    document.getElementById('avg').innerHTML = arrAvg(series);
}
function reverseOrder(series) {
    document.getElementById('reverse').innerHTML = series.reverse();
}

function clearIt() {
    document.getElementById("textarea").value = "";
}

var capped = false;
function capitalize() {
    var text = document.getElementById('textarea').value;
    if (!capped) {
        document.getElementById("textarea").value = text.toUpperCase();
        capped = true;
    } else {
        document.getElementById("textarea").value = text.toLowerCase();
        capped = false;
    }
}

function sort() {
    //textarea.value.split("\n").sort().join("\n");
    var text = document.getElementById('textarea').value;
    document.getElementById("textarea").value = text.split("\n").sort().join("\n");

}

//[dot]reverse() funtion is child of Array.prototype. thus wont interefere. 
//ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
function reverse() {
    var text = document.getElementById('textarea').value;
    document.getElementById("textarea").value = text.split("\n").reverse().join("\n");

}


function stripBlank() {
    var text = document.getElementById('textarea').value;
    text = text.split("\n");
    console.log(text);

    var i = 0;
    var temp = [];
    for (const x in text) {
        if (text[x].trim() != "") {
            temp[i] = text[x].trim();
            i++;
        }
    }
    console.log(temp.join("\n"));

    document.getElementById("textarea").value = temp.join("\n");

}


function addNumbers() {
    var text = document.getElementById('textarea').value.split("\n");
    console.log(text);

    var i = 1;
    for (const x in text) {
        text[x] = i + ". " + text[x];
        i++;
    }
    console.log(text);

    document.getElementById("textarea").value = text.join("\n");

}

function shuffle() {
    var text = document.getElementById('textarea').value.split("\n");
    console.log(text);

    for (let x = text.length - 1; x > 0; x--) {
        const y = Math.floor(Math.random() * (x + 1));
        [text[x], text[y]] = [text[y], text[x]];
    }

    console.log(text);
    document.getElementById("textarea").value = text.join("\n");
}