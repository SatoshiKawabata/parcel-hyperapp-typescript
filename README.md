# Very light frontend development environment

I introduce making a very light frontend evironment (parcel, typescript, hyperapp, picostyle, jest). I wanted to create a frontend development environment immediately for less dependencies and more simple. There are good minimal libraries.

## Getting started
```
yarn init
```

## Minimal frontend libraries

### hyperapp
![hyperapp](https://pbs.twimg.com/profile_images/968897827265945600/PcmPXmEk_400x400.jpg)
[hyperapp](https://github.com/hyperapp/hyperapp) is very a light library for front-end JavaScript like React. 
If you want to know how to use, you can get started from [this article](https://dev.to/aspittel/functional-programming-in-javascript-done-right-with-hyperapp-570f). This is very very small(1.4KB) and [no dependencies](https://github.com/hyperapp/hyperapp/blob/master/package.json). This includes also the light function state management like [Redux](https://redux.js.org). "Action" can change the "State".
```
yarn add hyperapp
```

### picostyle
[picostyle](https://github.com/morishitter/picostyle) is a very light library for CSS in JS. This is 0.4KB and also [no dependeices](https://github.com/morishitter/picostyle/blob/master/package.json). You can use this instead of [styled-components](https://www.styled-components.com/).

hyperapp and picostyle was created by the members of the same company.
```
yarn add picostyle
```

## Module bundler
![parcel](https://user-images.githubusercontent.com/19409/31321658-f6aed0f2-ac3d-11e7-8100-1587e676e0ec.png)
[parcel](https://parceljs.org/) is a simple module bundler. This has no complicated config. 

```
yarn add parcel-bundler -D
```

## Transform
![TypeScript](http://mherman.org/assets/img/blog/typescript-logo.png)
I want to use type so I selected [TypeScript](http://www.typescriptlang.org). "State" of hyperapp should be defined by type so it gets very easy to use the state from components. [tslint](https://palantir.github.io/tslint/) is linter for TypeScript.
You should add `tsconfig.json` and `tsliny.json`.

```
yarn add typescript tslint -D
```

## Testing framework
![Jest](https://facebook.github.io/jest/img/opengraph.png)
[Jest](https://facebook.github.io/jest/) is a testing framework for JavaScript made by Facebook. This is often used with React. I added `ts-jest` to use TypeScript in this case.

```
yarn add jest ts-jest @types/jest
```

And I added setting into `package.json` for `ts-jest`.
```
{
  "jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }
}
```
My test code for hyperapp is [here](https://github.com/SatoshiKawabata/parcel-hyperapp-typescript/blob/master/src/Container.spec.tsx).


## Result Project
https://github.com/SatoshiKawabata/parcel-hyperapp-typescript
