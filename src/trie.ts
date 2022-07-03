// A Node in a Trie
class TrieNode {
    public children: any = {};
    public isWord: boolean = false;
}

// Construct a Trie with insert.
// The insert method takes a word as a parameter and adds it to the Trie.
class WordsTrie {
    public root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) : void {
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

    generateAnagrams(hintPhrase: string, numberOfWords: number) : string[] {
        var anagrams: string[] = [];
        this.getAllAnagramsRecursively(hintPhrase, numberOfWords - 1, "", anagrams);
        return anagrams;
    }

    getAllAnagramsRecursively(hintPhrase: string, spaces: number, candidate: string, anagrams: string[], node: any = null) : void {
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