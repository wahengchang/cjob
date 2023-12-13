# cobj
The `cjob`(Accessing Object) npm package is a utility function that allows you to easily extract/retrieving data from complex JSON structures in Node.js.

[![NPM](https://nodei.co/npm/cobj.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/cobj)


## Install
```
$ npm install --save cobj
```

## Uage
Call the cjob function with the `JSON object` and the `path` in string to the desired value as arguments:

```js
const cobj = require('cobj')
const result = cjob(jsonObject, path)
```

- `jsonObject`: The JSON object or array from which you want to extract a value.
- `path`: The path to the desired value within the JSON structure. Use dot notation to navigate through nested objects and arrays. Array indices can be used to access specific elements within arrays.


In this example, the `cjob` function will extract the value located at the path 'a.0' within the object.

The path specifies that we want to access the element at index 0 within the array a. The extracted value, 1, is then returned and printed to the console.



```js
const cobj = require('cobj')
const mock = {
  a: [1, 2]
}
cjob(mock, 'a.0') //1
```

## Examples

Example 1: Accessing an Object in a Simple Structure
```js
const cobj = require('cobj')
const mock = {
  a: [1, 2],
  b: 3
}
cjob(mock, 'a.0') //1
cjob(mock, 'a.1') //2
cjob(mock, 'a.b') //3
```

Example 2: Accessing an Array in a Simple Structure
```js
const cobj = require('cobj')
const mock = [{ a: 1 }, 2];
cjob(mock, '0.a') //1
cjob(mock, '1') //2
```

Example 3: Accessing a Nested Object and Array in a Complex Structure
```js
const cobj = require('cobj')
const mock = {
        a: {
            b: {
                c: [
                    [ {d: 1} ]
                ]
            }
        }
    }
cjob(mock, 'a.b.c.0.0.d') //1
```

## Test coverage
![image](https://github.com/wahengchang/cjob/assets/5538753/ce83d987-d43e-41f7-9419-81e3641a4570)
