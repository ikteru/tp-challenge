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
}


export { WordsTrie };