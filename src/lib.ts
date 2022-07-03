// Read a file in the filesystem.
// The file contains a list of words. Each word is on a separate line.
// The function returns an array of words.
export function readWordsFile(filePath: string) : string[] {
    const fs = require('fs');
    const data = fs.readFileSync(filePath, 'utf8'); 
    return data.split(/\r?\n/);
}

// Given a list of words, remove all words that don't satisfy the following conditions:
// - The number of characters in the word is greater than or equal to minWordLength.
// - The word is not a duplicate of a word that is already in the list.
// - The characters of the word are all included in a given set of characters hintPhrase.
// The function returns an array of words.
export function filterWords(words: string[], minWordLength: number, hintPhrase: string) : string[] {
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
export function compareOccurances(word: string, hintPhrase: string) : boolean {
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
export function replaceAll(str: string, oldChar: string, newChar: string) : string {
    return str.split(oldChar).join(newChar);
}

// Get minutes from milliseconds
export function getSeconds(ms: number) : number{
    return Math.round(ms / 1000 );
}

// Given a list of strings and a list of hashes, return a list of strings whose hashes match the hashes in the list of hashes.
// The function returns an array of strings.
export function findMatchingHashes(anagrams: string[], hashes: string[]) : string[] {
    const crypto = require('crypto')

    const results = [];
    for (const anagram of anagrams) {
        const hash = crypto.createHash('md5').update(anagram).digest("hex");
        if (hashes.includes(hash)) {
            results.push(anagram);
        }
    }
    return results;
}

