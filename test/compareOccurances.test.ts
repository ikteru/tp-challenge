import { compareOccurances } from "../src/lib";

// Test the compareOccurances function.
describe("test compareOccurances function", () => {
    it("should return false for words that have characters occuring more than they do in the hintPhrase", () => {
        const wordOccursMoreThanHintPhrase = compareOccurances("popout", "poultry outwits ants");
        expect(wordOccursMoreThanHintPhrase).toEqual(false);
    });
    it("should return true for words that have characters occuring less or equal to how many times they do in the hintPhrase", () => {
        const wordOccursMoreThanHintPhrase = compareOccurances("statutory", "poultry outwits ants");
        expect(wordOccursMoreThanHintPhrase).toEqual(true);
    });
});