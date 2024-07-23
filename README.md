# regex-mapper

A small utility library that provides functions for mapping and matching strings against a set of regular expressions.

## Installation

First, ensure you have [Node.js](https://nodejs.org/) installed. Then, you can install this library using npm (or yarn):

```sh
npm install regex-mapper
```

or import by cdn https://cdn.jsdelivr.net/npm/regex-mapper/dist/index.umd.js

Certainly! Below is an example of how to use the `regex-mapper` library by importing it via CDN with the UMD (Universal Module Definition) format in an HTML file:


## Functions

### `regexMapper`

Creates a function that maps a given string to a key, based on the regular expressions or strings provided in a map.

#### Usage

```typescript
import { regexMapper } from './regex-utils';

const map = {
  greeting: /^hello/,
  farewell: /bye$/,
};

const match = regexMapper(map);

console.log(match("hello world")); // Output: 'greeting'
console.log(match("goodbye")); // Output: 'farewell'
console.log(match("unknown")); // Output: undefined
```

### `regexMapperStrict`

Similar to `regexMapper`, but throws an error when no match is found.

#### Usage

```typescript
import { regexMapperStrict } from './regex-utils';

const map = {
  greeting: /^hello/,
  farewell: /bye$/,
};

const matchStrict = regexMapperStrict(map);

console.log(matchStrict("hello world")); // Output: 'greeting'
console.log(matchStrict("goodbye")); // Output: 'farewell'
console.log(matchStrict("unknown")); // Throws an error
```

### `regexMatcher`

Creates a function that returns all keys whose corresponding regular expression matches the given string.

#### Usage

```typescript
import { regexMatcher } from './regex-utils';

const map = {
  greeting: /^hello/,
  farewell: /bye$/,
  casual: /yo/,
};

const matchAll = regexMatcher(map);

console.log(matchAll("hello yo")); // Output: ['greeting', 'casual']
console.log(matchAll("farewell bye")); // Output: ['farewell']
console.log(matchAll("unknown")); // Output: []
```

## Using in UMD

### Example: Using regex-mapper with UMD in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Regex Mapper Example</title>
  </head>
  <body>
    <h1>Regex Mapper Example</h1>
    Check console log
    <script src="https://cdn.jsdelivr.net/npm/regex-mapper/dist/index.umd.js"></script>
    <script>
      // Assuming that the module exposes a global "regexMapper" object
      const { regexMapper, regexMatcher } = RegexMapper;

      // Define some regular expressions
      const regexes = {
        "greeting": "^hello",
        "number": "\\d+",
        "ending": "world$",
      }

      // Example strings to match
      const strings = ["hello123", "world", "123", "hello world", "test"];

      // Use the regexMapper function to map each string to labels based on the regular expressions
      const mappedStrings = strings.map(regexMapper(regexes));

      // Use the regexMatcher function to find matches for a single string
      const singleMatches = regexMatcher(regexes)("hello123");

      console.info("Mapped Strings:", mappedStrings);
      console.info("Single Matches for 'hello123':", singleMatches);
    </script>
  </body>
</html>
```

## Development

To contribute or modify the library, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/snomiao/regex-mapper.git
   ```
2. Navigate to the project directory:
   ```sh
   cd regex-mapper
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run tests:
   ```sh
   npm test
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## Acknowledgements

This utility was built using the error handling library [DIE](https://www.npmjs.com/package/@snomiao/die).

---

Happy coding! 🎉 

2024 snomiao <snomiao@gmail.com> 