import { WordsTrie } from "../src/trie";

// Test the WordsTrie class and its methods
describe("WordsTrie", () => {
    let wordsTrie: WordsTrie;
    beforeEach(() => {
        wordsTrie = new WordsTrie();
    }
    );
    it("should be able to insert a word", () => {
        wordsTrie.insert("hello");
        expect(wordsTrie.root.children["h"].children["e"].children["l"].children["l"].children["o"].isWord).toBe(true);
    }
    );
    it("should be able to generate anagrams", () => {
        wordsTrie.insert("auctioned");
        wordsTrie.insert("cautioned");
        wordsTrie.insert("education");
        wordsTrie.insert("earthling");
        wordsTrie.insert("tacitness");
        const anagrams = wordsTrie.generateAnagrams("cautioned", 1);
        expect(anagrams).toEqual(["auctioned", "cautioned", "education"]);
    }
    );
    it("should be able to generate anagrams with spaces and a hint phrase", () => {
        wordsTrie.insert("a");
        wordsTrie.insert("gentleman");
        wordsTrie.insert("voices");
        wordsTrie.insert("rant");
        wordsTrie.insert("on");
        wordsTrie.insert("elegant");
        wordsTrie.insert("man");
        const anagrams = wordsTrie.generateAnagrams("agentleman", 2);
        expect(anagrams).toEqual(["a gentleman", "gentleman a", "elegant man", "man elegant"]);
    }
    );
});
