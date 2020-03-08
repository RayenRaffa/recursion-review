## Exercise: Recursion Review
Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.

Consider the following function:

var eat = function(meal){
  console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');
  }
}
Which produces this output:

eat(['soup', 'potatoes', 'fish']);
// => meal before bite: ["soup", "potatoes", "fish"]
// => now eating fish
// => meal before bite: ["soup", "potatoes"]
// => now eating potatoes
// => meal before bite: ["soup"]
// => now eating soup
// => done with the meal!

You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.

In this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)

(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them. When we reimplement new browser functionality in older browsers, it's called a "polyfill".)

**New for the Review Sprint**

## Review Sprint Repo
The repo you will be working out of will be a different repo from Precourse. Look on Github for recursion-review instead of recursion. Work on this from scratch and do not reference code from Precourse.

## Broken Tests
To help you familiarize yourself with our favorite testing tools, Mocha and Chai, we've broken the test suite.

Mocha  is a test framework that provides the structure for test files, and is responsible for running tests and reporting their results. Mocha provides the it and describe global variables along with useful hooks like beforeEach.

Chai  is an assertion library that makes your tests more expressive and your error messages more helpful. Chai provides the expect function and various methods  that allow you to express your behavior in a human readable way.

Pay careful attention to the test files and fix them as necessary. Do not to refer back to the previous test suite, you would only be cheating yourself out of an important learning opportunity. Instead, use the Mocha and Chai documentation. You can do it!

## Bare minimum Requirements
- Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass, fixing them as necessary.

- Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass, fixing them as necessary.
    * You should use document.body, element.childNodes, and element.classList

## Advanced Content
Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

-  Complete the New for the Review Sprint content above.

-  Replace parseJSON with your own function in src/parseJSON.js, and make the specs pass, fixing them as necessary.
 * Use a recursive descent parser
 