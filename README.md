# react-sp-cards-slider

## Demo

![demo-0](./_demo/demo-0.gif?raw=true)

## Install

```bash
yarn add react-sp-cards-slider
```

## Usage

```jsx
import React, { Component } from "react";
import ReactSPCardsSlider from "react-sp-cards-slider";

const App = () => {
  return (
    <div style={{ maxWidth: "1136px", margin: "0 auto" }}>
      <ReactSPCardsSlider
        title="Slider like SmartPrice"
        items={[
          {
            src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-xs-max/_.jpg",
            name: "iPhone Xs Max",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-x/_.jpg",
            name: "iPhone X",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-8-plus/_.jpg",
            name: "iPhone 8 Plus",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-fold/_.jpg",
            name: "Samsung Galaxy Fold",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s10-plus/_.jpg",
            name: "Galaxy S10 plus",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/huawei/p30-pro/_.jpg",
            name: "Huawei P30 PRO",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s20/_.jpg",
            name: "Samsung Galaxy S20",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s10-lite/_.jpg",
            name: "Samsung Galaxy S10 lite",
          },
          {
            src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-note-10/_.jpg",
            name: "Samsung Galaxy Note 10",
          },
        ]}
        step={3}
        itemRenderer={({ src, name }) => {
          return (
            <a style={{ display: "block", boxSizing: "border-box" }}>
              <div className="img-box">
                <img src={src} alt={name} className="sp-preview" />
                <div>{name}</div>
              </div>
            </a>
          );
        }}
        itemWidth={265}
        itemsPadding={23}
        mainWidthLimit={1136}
        breakpoints={{
          lg: 1350,
        }}
      />
    </div>
  );
};
```

## With step settings

```
step={1}
itemWidth={265}
itemsPadding={23}
mainWidthLimit={1136}
breakpoints={{
    lg: 1350,
}}
```

![demo-2](./_demo/demo-2.gif?raw=true)

## Or full width

```
step={1}
itemWidth={1136}
itemsPadding={23}
mainWidthLimit={1136}
breakpoints={{
    lg: 1350,
}}
```

![demo-4](./_demo/demo-4.gif?raw=true)

[![NPM](https://img.shields.io/npm/v/example-typescript-react-component-library.svg)](https://www.npmjs.com/package/example-typescript-react-component-library) [![LICENSE](https://img.shields.io/npm/l/example-typescript-react-component-library.svg?color=green)](https://www.npmjs.com/package/example-typescript-react-component-library)

<!--
[![coverage report](https://github.com/pravosleva/example-typescript-react-component-library/badges/master/coverage.svg)](https://github.com/pravosleva/example-typescript-react-component-library/commits/master) -->

An example project setup that allows for publishing a [TypeScript](https://github.com/Microsoft/TypeScript) [React](https://github.com/facebook/react) component module to [npm](https://www.npmjs.com/package/example-typescript-react-component-library).

Initially setup using [create-react-library](https://github.com/transitive-bullshit/create-react-library) and converted to use `TypeScript`.

## Project structure

The project contains a `src` directory containing the module files that get published to npm, and an `example` directory containing a working `create-react-app` project that contains an example usage of the module.

## CI

In progress...

## Development

Whilst in the root directory, install dependencies

```sh
yarn && cd ./example && yarn redev
```

But! Check example deps:

```
"react-sp-cards-slider": "file://home/pravosleva/projects/react-sp-cards-slider/dist"
```
