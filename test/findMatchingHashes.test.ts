import { findMatchingHashes } from "../src/lib";

// Test findMatchingHashes function
describe("findMatchingHashes", () => {
    it("should return an empty array if no hashes are provided", () => {
        const anagrams = ["random anagram", "another one", "something else entirely"];
        const hashes : string[] = [];
        const results = findMatchingHashes(anagrams, hashes);
        expect(results).toEqual([]);
    });
    it("should return an empty array if no anagrams are provided", () => {
        const anagrams : string[] = [];
        const hashes = ["e4820b45d2277f3844eac66c903e84be", "23170acc097c24edb98fc5488ab033fe", "665e5bcb0c20062fe8abaaf4628bb154"];
        const results = findMatchingHashes(anagrams, hashes);
        expect(results).toEqual([]);
    });
    it("should return hashes that match the provided anagrams", () => {
        const anagrams = ["random anagram", "another one", "something else entirely"];
        const hashes = ["36e06e0efcf5418ff8eac98b2ab426e3", "f456075b72cc3860cc0e562f2b89c3e2", "665e5bcb0c20062fe8abaaf4628bb154"];
        const results = findMatchingHashes(anagrams, hashes);
        expect(results).toEqual(["random anagram", "another one"]);
    });
});



    