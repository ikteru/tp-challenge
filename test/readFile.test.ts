import { readWordsFile } from "../src/lib";

// Test the readWordsFile function.
describe("test filterWords function", () => {
    it("should read all words in a linux file with each line having a single word and return them as an array.", () => {
        const words = readWordsFile("./test/testListLinux.txt");
        expect(words).toEqual(["this", "tests", "the", "readwordsfile", "function"]);
    });
    it("should read all words in a windows file with each line having a single word and return them as an array.", () => {
        const words = readWordsFile("./test/testListWindows.txt");
        expect(words).toEqual(["a", "a", "a's", "a's", "ab's", "abaci"]);
    });
});