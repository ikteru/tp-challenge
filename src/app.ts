import { config } from "./config";
import { filterWords, readFile, replaceAll } from "./lib";
import { WordsTrie } from "./trie";
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

console.log("");
console.log("Store the words into a prefix tree, makes things faster :p ...");
const wordsTrie = new WordsTrie();
for (let i = 0; i < words.length; i++) {
    wordsTrie.insert(words[i]);
}
