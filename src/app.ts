import { config } from "./config";
import { filterWords, readFile, replaceAll } from "./lib";
const tmp : string = config.hintPhrase;
const hintPhrase : string = replaceAll( tmp, " ", "");

const minWordLength : number = config.minWordLength;
const numberOfWords : number = config.numberOfWords;

const hashes : string[] = config.hashes;

console.log("");
console.log("Importing list of words...");
let words : string[] = readFile("WordList");

console.log("");
console.log("Filtering out the small words, the words that contain letters outside the hint phrase, and duplicates too ...");
console.log(`The number of words we started with is: ${words.length}`);
words = filterWords(words, minWordLength, hintPhrase);
console.log(`The number of words we ended up with is ${words.length} ... Not bad ...`);
