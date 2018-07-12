# simple-random-data
Generates dummy data from a given structure.

## How to import
```javascript
  const simpleRandomData = require('simple-random-data')
```

### Simple usage
```javascript
  const customerSchema = new Dummy({
    name: Dummy.string(), // Default: 2-32, Dummy.string(min, max)
    age: Dummy.number(), // Default: 0-1000, Dummy.number(min, max)
    favouriteSports: Dummy.array(4, Dummy.string()),
  })

  const tenRandomCustomers = customerSchema.for(10)

  // tenRandomCustomers [
  //   {
  //     "name": "cG0gJj2aYYgM",
  //     "age": 307,
  //     "favouriteSports": [
  //       "gCVKqZjcTzAos3QhMJ",
  //       "l9dCSBkj",
  //       "JcVzNURYqqlsd8Fvq7ntpO",
  //       "oGGUOgm"
  //     ]
  //   },
  //   {
  //     "name": "XS8JTF",
  //     "age": 268,
  //     "favouriteSports": [
  //       "bRMbGLZn",
  //       "oEC1as3zZF9t0vkzmo4J",
  //       "tkOxWobpmza2",
  //       "q2Tqa7jHHj1Mwd"
  //     ]
  //   },
  //   ...
  // ]
```

### Nested structure
```javascript
  const bookSchema = new Dummy({
    title: Dummy.string(),
    genre: Dummy.string(),
    author: new Dummy({
      name: Dummy.string(),
      dateOfBirth: Dummy.date(),
    }),
  })

  const fiveRandomBooks = bookSchema.for(5)

  // fiveRandomBooks [
  //   {
  //     "title": "c20NyCIUjVYpqAHmXqiPfOlUf9kx1",
  //     "genre": "E26",
  //     "author": {
  //       "name": "YBbOcg6",
  //       "dateOfBirth": "1970-06-19T08:39:45.022Z"
  //     }
  //   },
  //   {
  //     "title": "dwrZLqIyzWfZla",
  //     "genre": "A4SZxA3bNJTu2nfMB",
  //     "author": {
  //       "name": "PnwQ1iSbLk7FcZ4NU",
  //       "dateOfBirth": "2005-05-09T21:12:15.379Z"
  //     }
  //   },
  //   ...
  // ]
```

### License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.