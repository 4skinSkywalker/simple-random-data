# simple-random-data
Generates dummy data from a given structure.

## How to import
```javascript
  const Dummy = require('simple-random-data')
```

### Simple usage
```javascript
  const customerSchema = new Dummy({
    name: Dummy.string(), // Default: 2-32, Dummy.string(min, max)
    age: Dummy.number(), // Default: 0-1000, Dummy.number(min, max)
    favouriteSports: Dummy.array(10, Dummy.string()),
  })

  const tenRandomCustomers = userSchema.for(10)
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
```

###License
The MIT License (MIT)

Copyright (c) 2014 Joshua Jung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.