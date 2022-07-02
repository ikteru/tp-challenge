class TrieNode {
    public children: any = {};
    public isWord: boolean = false;
}

// Construct a Trie with insert, contains, and find methods.
// The insert method takes a word as a parameter and adds it to the Trie.
// The contains method takes a word as a parameter and returns true if the word is in the Trie, false otherwise.
// The find method takes a prefix as a parameter and returns an array of all words in the Trie that start with the prefix.
class WordsTrie {
    public root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let current: TrieNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isWord = true;
    }

    generateAnagrams(hintPhrase: string, numberOfWords: number) {
        var anagrams: string[] = [];
        this.getAllAnagramsRecursively(hintPhrase, numberOfWords - 1, "", anagrams);
        return anagrams;
    }

    getAllAnagramsRecursively(hintPhrase: string, spaces: number, candidate: string, anagrams: string[], node: any = null) {
        if (node == null) node = this.root;

        if (hintPhrase.length == 0) {
            if (node.isWord && spaces == 0)
                anagrams.push(candidate);
            return;
        }
        for (let key in node.children) {
            // Remove the letter from the hintPhrase.
            const result = hintPhrase.replace(key, "");

            // If the letter is in the hintPhrase, the hintPhrase won't be equal to the result. 
            if (hintPhrase != result) {
                this.getAllAnagramsRecursively(result, spaces, candidate + key, anagrams, node.children[key]);
            }
        }
        if (node.isWord && spaces > 0) {
            this.getAllAnagramsRecursively(hintPhrase, spaces - 1, candidate + " ", anagrams);
        }
    }
}


export { WordsTrie };