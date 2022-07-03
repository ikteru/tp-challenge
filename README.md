# Coding Challenge

This repository is the solution to the [Coding Challenge](https://followthewhiterabbit.trustpilot.com/cs/step3.html) by TrustPilot.

The solution is a simple console application in **Typescript**.

# How to run

To run this project, make sure you have the following prerequisites:
- You have Node.js installed.
- You have npm installed.

Now, next thing you should do is to install the dependencies:
```
npm install
```

After which you can run the application:
```
npm start
```

# Results:

## First result:
If you run the project as is, you'll be using the default configs.

And the default configs look for anagrams with ``` 3 ``` words in them. 
They also only use words that have ``` 3 ``` characters or more, thus eliminating words that are too short.

That config will give you the following result in about ``` 30 ``` seconds:

```
- printout stout yawls
```
Which is the easiest hash to crack for the following reasons:
- The number of possible words in the anagram is: ```1589```. That's 98% less than the number of words in the list. 
- The number of words in the anagrams was limited to ```3``` words, so the number of possible combinations I got was much smaller: ```4524```.

To get the other two results, you're going to have to change the configs. 

## Second result:

Looking for anagrams with ``` 3 ``` words in them and using words that have ``` 2 ``` characters or more, produces the following result in about ``` 50 ``` seconds:

```
- printout stout yawls 
- ty outlaws printouts
```

## Third result:

To get the final and hardest result, we need to look for anagrams with ``` 4 ``` words in them and using words that have ``` 2 ``` characters or more. The search produces the following result in about ``` 50 ``` minutes:

```
- wu lisp not statutory
```
<br>
<br>

**P.S:**
- To change the configs, use the ```src/config.ts``` file. 
- The computer I'm using has an Intel Core i5 processor, so the results could be faster on a faster computer.

# Explination:

The code produces the results above thanks to a few steps:

- First, I load the list of words from the given file.
- Then, I filter the list of words to only include words that satisfy the conditions below. That's because it's nearly impossible to generate phrases with 2 to 4 words using combinations of words from a list of nearly a ```100000``` words. 
    - The number of characters in the word is greater than or equal to a minimum length.
    - The word is not a duplicate of a word that is already in the list.
    - The characters of the word are all included in a given set of characters in the hint phrase.
- The previous step slims down the possible words by around ```98%```. It's much easier to generate combinations of such a smaller list. But it's still hard if we go about it the simple way of using nested loops. The complexity will be around ```O(n^3)``` where ```n``` is the number of words in the list. So, we need to use a faster way to generate combinations. Using a prefix tree ( a Trie ) is one way to do it. It can store words with the same prefix as if they are one word, which largely reduces the number of words we need to check.
- By using a trie, and checking the tree recursively, we can generate all possible combinations of words in a much faster way.
- Once we get a list of anagrams, all that's left to do is check their hashes and see if they match.

# Possible improvements:

- When filtering the list of words, we made sure they don't have more occurances of the same character they do in the anagram. We could possibly do the same thing when generating the anagrams. We could check if the generated anagram has letters that occur more frequently than they do in the hint phrase.




