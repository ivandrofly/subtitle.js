# subtitle.js

[![Build Status](https://travis-ci.org/gsantiago/subtitle.js.svg?branch=master)](https://travis-ci.org/gsantiago/subtitle.js)
[![Code Climate](https://codeclimate.com/github/gsantiago/subtitle.js/badges/gpa.svg)](https://codeclimate.com/github/gsantiago/subtitle.js)
[![Coverage Status](https://coveralls.io/repos/github/gsantiago/subtitle.js/badge.svg?branch=master)](https://coveralls.io/github/gsantiago/subtitle.js?branch=master)
[![npm version](https://badge.fury.io/js/subtitle.svg)](http://badge.fury.io/js/subtitle)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Parse and manipulate SRT (SubRip) format.

## Installation

`npm install subtitle --save`

For browser usage, you can copy the script `subtitle.browser.js`
from the `browser` folder.

## Usage

```javascript
var Subtitle = require('subtitle');

var captions = new Subtitle();

captions.parse('your srt here');

console.log(captions.getSubtitles());

```

It's gonna return an array like this:

```javascript
[
  {
    index: 1,
    start: '00:00:20,000',
    end: '00:00:24,400',
    text: 'Bla Bla Bla Bla'
  },
  {
    index: 2,
    start: '00:00:24,600',
    end: '00:00:27,800',
    text: 'Bla Bla Bla Bla'
  }
]
```

You can also pass options to the `getSubtitles()` method.

```javascript
captions.getSubtitles({
  duration: true, // Include the `duration` property
  timeFormat: 'ms' // Set time format to milliseconds
});
```

Here's the result:

```javascript
[
  {
    index: 1,
    start: 20000,
    end: 24400,
    duration: 4400,
    text: 'Bla Bla Bla Bla'
  },
  {
    index: 2,
    start: 24600,
    end: 27800,
    duration: 3200,
    text: 'Bla Bla Bla Bla'
  }
]
```

You can also add new captions.

```javascript
var captions = new Subtitle();

captions.add({
  start: '00:00:20,000',
  end: '00:00:21,900',
  text: 'Text here'
});

// You can use time in MS if you prefer
captions.add({
  start: 22000,
  end: 22580,
  text: 'Another text here...'
});
```

And what about resync your captions?

```javascript
// Advance 1s
captions.resync(1000);

// Delay 500ms
captions.resync(-500);
```

Then, you can stringify your changes:

```javascript
captions.stringify(); // Returns a valid SRT
```

## Tests

Subtitle.js uses [AVA](https://github.com/avajs/ava) for running tests and [nyc](https://github.com/istanbuljs/nyc) for code coverage.

If you want to run these tests, you need to install all devDependencies:

`npm install`

Now you can run the tests with the following command:

`npm test`

**Code Coverage**

You can check the code coverage by running the following command:

`npm run coverage`

If you want a pretty HTML report, run the following:

`npm run report`

Your report will be available in the `coverage` folder.

## Roadmap
* [x] Basic SRT parser
* [x] Basic manipulation
* [x] Stringify
* [x] Time conversion
* [x] Duration property
* [x] Browser support
* [ ] Stream interface
* [ ] WebVTT support
* [ ] Better docs
