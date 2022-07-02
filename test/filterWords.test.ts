import { filterWords } from "../src/lib";


// Test the filterWords function.
describe("test filterWords function", () => {
    it("should remove all words with length smaller than 3.", () => {
        const words = ["a", "ab", "abaci", "abalones", "ab's", "abandoned", "a's", "bat"];
        const result = filterWords(words, 3, "bat");
        expect(result).toEqual(["bat"]);
    });
});
