function statistic(str) {
    letters = 0;
    numbers = 0;
    others = 0;
    for (let symb of str) {
        if ("qwertyuiopasdfghjklzxcvbnm".indexOf(symb.toLowerCase()) != -1)
            letters++;
        else if ("1234567890".indexOf(symb) != -1)
            numbers++;
        else
            others++;
    }
    return `Letters: ${letters}, Numbers: ${numbers}, Others: ${others}`;
}

function oneDigitNumber(num, str) {
    tmp = `${num}`[1];
    switch (tmp) {
        case "0":
            return str;
        case "1":
            str += "один";
            return str;
        case "2":
            str += "два";
            return str;
        case "3":
            str += "три";
            return str;
        case "4":
            str += "четыре";
            return str;
        case "5":
            str += "пять";
            return str;
        case "6":
            str += "шесть";
            return str;
        case "7":
            str += "семь";
            return str;
        case "8":
            str += "восемь";
            return str;
        case "9":
            str += "девять";
            return str;
    }
}
function twoDigitNumber(num) {
    if (num === Number(num)) {
        switch (num) {
            case 10:
                return "десять";
            case 11:
                return "одинадцать";
            case 12:
                return "двенадцать";
            case 13:
                return "тринадцать";
            case 14:
                return "четырнадцать";
            case 15:
                return "пятнцадцать";
            case 16:
                return "шестнадцать";
            case 17:
                return "семнадцать";
            case 18:
                return "восемьнадцать";
            case 19:
                return "девятнадцать";
            default:
                str = "";
                if (`${num}`[0] == "2") {
                    str += "двадцать ";
                    return oneDigitNumber(num, str);
                }
                else if (`${num}`[0] == "3") {
                    str += "тридцать ";
                    return oneDigitNumber(num, str);
                }
                else if (`${num}`[0] == "4") {
                    str += "сорок ";
                    return oneDigitNumber(num, str);
                }
                else if (`${num}`[0] == "5") {
                    str += "пятьдесят ";
                    return oneDigitNumber(num, str);
                }
        }
    }
    else {
        return "Erorr!";
    }
}

function changeCase(str) {
    buffStr = "";
    for (let symb of str) {
        if ("qwertyuiopasdfghjklzxcvbnm".indexOf(symb) != -1) {
            buffStr += symb.toUpperCase();
        }
        else if ("QWERTYUIOPASDFGHJKLZXCVBNM".indexOf(symb) != -1) {
            buffStr += symb.toLowerCase();
        }
        else if ("1234567890".indexOf(symb) != -1) {
            buffStr += "_";
        }
        else {
            buffStr += symb;
        }
    }
    return buffStr;
}

function transofrmCssToCamelCase(str) {

    arrWords = str.split("-");
    buffStr = arrWords[0];
    for (let i = 1; i < arrWords.length; i++) {
        buffStr += arrWords[i][0].toUpperCase() + arrWords[i].slice(1);
    }
    return buffStr;

}

function transofrmToAbbreviation(str) {
    abbreviation = "";
    for (let word of str.split(" ")) {
        abbreviation += word[0].toUpperCase();
    }
    return abbreviation;

}

function concatStr() {
    fullStr = "";
    for (let i = 0; i < arguments.length; i++) {
        fullStr = fullStr.concat(arguments[i], " ");
        //fullStr+= arguments[i] + " ";
    }
    return fullStr;
}

//1
document.write("<p>Example 1</p>");
str = "Hello, world! 15.12.2022";
document.write(`<p>string: ${str} ---> ${statistic(str)}</p>`);
document.write(`<hr>`);
//2
document.write("<p>Example 2</p>");
n = 43;
document.write(`<p>number: ${n} ---> ${twoDigitNumber(n)}</p>`);
document.write(`<hr>`);
//3
document.write("<p>Example 3</p>");
str = "Hello, world! 15.12.2022";
document.write(`<p>string: ${str} ---> ${changeCase(str)}</p>`);
document.write(`<hr>`);
//4
document.write("<p>Example 4</p>");
str = "border-top-left-radius";
document.write(`<p>string: ${str} ---> ${transofrmCssToCamelCase(str)}</p>`);
document.write(`<hr>`);
//5
document.write("<p>Example 5</p>");
str = "border top left radius";
document.write(`<p>string: ${str} ---> ${transofrmToAbbreviation(str)}</p>`);
document.write(`<hr>`);
//6
document.write("<p>Example 6</p>");
str = "border top left radius";
str1 = "Hello world!";
str2 = "JavaScript";
document.write(`<p>string: ${str} | ${str1} | ${str2} ---> ${concatStr(str, str1, str2)}</p>`);
document.write(`<hr>`);