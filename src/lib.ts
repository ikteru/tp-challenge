// Read a file in the filesystem.
// The file contains a list of words. Each word is on a separate line.
// The function returns an array of words.
export function readFile(filePath: string) {
    const fs = require('fs');
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\r\n');
}

// Given a list of words, remove all words that don't satisfy the following conditions:
// - The number of characters in the word is greater than or equal to minWordLength.
// - The word is not a duplicate of a word that is already in the list.
// - The characters of the word are all included in a given set of characters hintPhrase.
// The function returns an array of words.
export function filterWords(words: string[], minWordLength: number, hintPhrase: string) {
    const result: string[] = [];
    hintPhrase = hintPhrase.replace(" ", "");
    for (const word of words) {
        if (word.length >= minWordLength && !result.includes(word) && word.split('').every(character => hintPhrase.includes(character)) && compareOccurances(word, hintPhrase)) {
            result.push(word);
        }
    }
    return result;
}

// Given two words A and B, compare the number of occurrences of each character in A and B.
// If the number of occurrences of a character in A is greater than the number of occurrences of the same character in B, return false.
// If the number of occurrences of a character in A is less than or equal to the number of occurrences of the same character in B, return true.
export function compareOccurances(word: string, hintPhrase: string) {
    const wordOccurances: any = {};
    const hintPhraseOccurances: any = {};
    for (const character of word) {
        if (wordOccurances[character]) {
            wordOccurances[character]++;
        } else {
            wordOccurances[character] = 1;
        }
    }
    for (const character of hintPhrase) {
        if (hintPhraseOccurances[character]) {
            hintPhraseOccurances[character]++;
        } else {
            hintPhraseOccurances[character] = 1;
        }
    }
    for (const character in wordOccurances) {
        if (wordOccurances[character] > wordOccurances[character]) {
            return false;
        }
    }
    return true;
}

// Replace all occurances of a character with another.
export function replaceAll(str: string, oldChar: string, newChar: string){
    return str.split(oldChar).join(newChar);
}
