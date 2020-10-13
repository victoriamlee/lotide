# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @victoriamlee/lotide`

**Require it:**

`const _ = require('@victoriamlee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head(arr)`: Retrieve the first element from the array
* `tail(arr)`: Retrieves every element except the head (first element) of the array
* `middle(arr)`: Returns the middle-most element(s) of the given array
* `assertArraysEqual(actual, expected)`: Compares two arrays and prints an appropraite message to the console
* `assertEqual(actual, expected)`: Compares two values and prints whether or not an expected output meets the actual
* `assertObjectsEqual(actual, expected)`: Takes in two objects and prints whether or not an expected output meets the actual
* `countLetters(string)`: Take in a sentence (as a string) and return a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: Take in a collection of items and return counts for a specific subset of those items
* `eqArrays(array1, array2)`: Compares two arrays and returns true or false, based on a perfect match
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false, based on a perfect match
* `findKey(object, callback)`: Scans the object and returns the first key for which the callback returns a truthy value (if not key is found, then it should return undefined)
* `findKeyByValue(object, value)`: Scan the object and return the first key which contains the given value (if no key with that given value is found, it returns undefined)
* `letterPositions(string)`: Return all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: Return a new array based on the results of the callback function
* `takeUntil(array, callback)`: Returns a "slice of the array with elements taken from the beginning", it will keep going back until the callback returns a truthy value
* `without(source, itemsToRemove)`: Returns a subset of a given array, removing unwanted elements
