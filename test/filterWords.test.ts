import { filterWords } from "../src/lib";


// Test the filterWords function.
describe("test filterWords function", () => {
    it("should remove all words with length smaller than 3.", () => {
        const words = ["a", "aba", "abaci", "abalones", "ab's", "abandoned", "a's"];
        const result = filterWords(words, 3, "aba");
        expect(result).toEqual(["aba"]);
    });

    it("should remove all duplicate words.", () => {
        const words = [ "aba" , "baa", "aba", "aab", "aab"];
        const result = filterWords(words, 3, "aba");
        expect(result).toEqual(["aba", "baa", "aab"]);
    });

    it("should remove all words that have character that don't exist in the hint phrase.", () => {
        const words = [ "abaci", "ab's", "abandoned", "a's", "aab"];
        const result = filterWords(words, 3, "aba");
        expect(result).toEqual(["aab"]);
    });
});
