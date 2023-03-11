# absolute_utils

## Description

This is a library of useful generic functions that I found myself copy & pasting into projects so I decided to centralize them and maintain them in sync and in a single repo. Some are inspired by the robust Ruby/Rails ecosystem of convenience methods, some are borne out of necessity. All methods should be non-mutative and return a value (exceptions for the latter rule may be made for timer functions), and will typically expect at least one argument.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

```
npm i @absoluteboi/absolute-utils
```
or (recommended)
```
yarn add @absoluteboi/absolute-utils
```

## Usage

Simply install and import:

**haveEqualNumericValues**
```
import { haveEqualNumericValues } from "@absoluteboi/absolute-utils"

haveEqualNumericValues([8,6,7,5,3,0,9], [0,6,5,7,3,9,8]);
 => true

haveEqualNumericValues([1,2,3], [1,2,4])
 => false
```

**numericSort**
```
import { numericSort } from "@absoluteboi/absolute-utils"

let numbers = [5,8,1,3,7,6];

numericSort(numbers)
 => [1,3,5,6,7,8]

numericSort(numbers, { reverse: true })
 => [8,7,6,5,3,1]
```

**pluck**
```
import { pluck } from "@absoluteboi/absolute-utils"

let items = [
  { a: "foo", b: "bar" },
  { a: "baz", b: "qux" }
];

pluck(items, "a")
 => ["foo", "baz"]

pluck(items, ["a", "b"])
 => [["foo", "bar"], ["baz", "qux"]]
```

**sliceEach**
```
import { sliceEach } from "@absoluteboi/absolute-utils"

let items = [
  { a: "foo", b: "bar" },
  { a: "baz", b: "qux" }
];

sliceEach(items, "a")
 => [{ a: "foo" }, { a: "baz" }]

sliceEach(items, ["a", "b"])
 => [{ a: "foo", b: "bar" }, { a: "baz", b: "qux" }]
```

**delay**
```
import { delay } from "@absoluteboi/absolute-utils"

delay(500)
 => *pauses thread execution for 500 miliseconds*

delay(5, "s")
 => *pauses thread execution for 5 seconds*

delay(1, "min")
 => *pauses thread execution for 1 minute*
```

**localeDateStringListFromRange**
```
import { localeDateStringListFromRange } from "@absoluteboi/absolute-utils"

const startDate = new Date(2023, 2, 8);
const endDate = new Date(2023, 2, 10);

localeDateStringListFromRange({ from: startDate, to: endDate })
 => ["2023-03-08", "2023-03-09", "2023-03-10"]
```

**buildQueryString**
```
import { buildQueryString } from "@absoluteboi/absolute-utils"

const params = { foo: "bar", baz: ["qux", "quo"] };

buildQueryString(params)
 => "?foo=bar&baz%5B%5D=qux&baz%5B%5D=quo"
```

**rejectEmpty**
```
import { rejectEmpty } from "@absoluteboi/absolute-utils"

const object = { foo: 1, bar: null, baz: 3, qux: false };

rejectEmpty(object)
 => { foo: 1, baz: 3, qux: false }
```

**withinMaxSafeInteger**
```
import { withinMaxSafeInteger } from "@absoluteboi/absolute-utils"

withinMaxSafeInteger(6)
 => 6

withinMaxSafeInteger(10000000000000000000)
 => Number.MAX_SAFE_INTEGER (9007199254740991)
```

**truncateWithEllipses**
```
import { truncateWithEllipses } from "@absoluteboi/absolute-utils"

const string = "The human torch was denied a bank loan.";

truncateWithEllipses(string, 15)
 => "The human torch&hellip;"
```

## Credits

Big thanks to the maintainers of `jest`, `node`, and `typescript` for this tool is built on their shoulders.

## License

GNU General Public License v3.0 or later (https://spdx.org/licenses/GPL-3.0-or-later.html)

<!--

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Run the test suite with either
```
npm run jest --watchAll
```
or (recommended)
```
yarn jest --watchAll
```
-->