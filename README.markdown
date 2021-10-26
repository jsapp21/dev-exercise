Please complete all of the following exercises.

Once finished, please run `./package-submission.sh`. This:

- packages your solution into a `.tar.gz` file named `dev-exercise-submission.tar.gz`
- excludes any unnecessary folders and files (`node_modules`, `dictionary.json`, `.git`)

Or, if you are on a non-Unix/MacOS system, please add your solutions to a zip
file, excluding `node_modules` and `.git` if applicable.

In the email from BenchPrep's recruiting team that directed you to this Github exercise, there is a link which you should use to upload your archive.

Please do not include any personal identifying information (PII). Incomplete submissions will not be reviewed.

If you have any questions, please email your hiring facilitator.

## JavaScript

### Simple Vue.js List

For this exercise, you will need to update included bootstrapped Vue.js application with the acceptance criteria listed below.
Please do not use any libraries or plugins to do this other
than the included core [Vue.js](https://vuejs.org) and, optionally, a library to fetch
the quotes. **The provided bootstrapped project should be sufficient to complete the exercise.**

Alternatively, if you wish to complete the exercise using another framework such as
[React](https://reactjs.org) or [Angular](https://angular.io) you are free to do so.
You must however complete the initial project setup yourself, provide instructions on running
the exercise and complete the same requirements.

You can assume that you only need to support modern web browsers, so feel
free to build the app using either the new ECMAScript 6 or the older ECMAScript 5
("plain" JavaScript) standard.

Please provide the following functionality:

- Required: Fetch quotes from the source [quotes.json](https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json) and display the available information in a list-like structure (table/list)
- Required: Provide client-side pagination (up to 15 quotes per page)
- Required: Provide a way to filter between game and movie quotes
- Required: Provide a client-side search that filters by the quote text

## Ruby

### Unscrabbler

Implement the find method to the WordFinder class.

The find method accepts a string of lower case letters. Find should return an array of all the words in dictionary.json that can be made by rearranging these letters. Feel free to add whatever you need to make the class work accurately and efficiently.

To run the provided tests:

```shell
ruby word_finder_test.rb
```

Feel free to add any tests you wish or to use a different test library like [RSpec](https://rspec.info).
