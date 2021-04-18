# MasterConf API
> API that provides details and information about Masterconf7.

[![Build Status][travis-image]][travis-url]

API to provide general details about the event MasterConf7.
Hotels and restaurants nearby information is also provided. 

See MasterConf7 at [https://masterconf7.herokuapp.com](https://masterconf7.herokuapp.com)

![](header.png)

## Usage example

To test the API got to [https://masterconf.herokuapp.com](https://masterconf.herokuapp.com).

## GET to /

Provides general information about the event (name, date, location etc)

## GET to /location

Provides information about the event location (address, maps location etc)

## GET to /hotel

Provides information about the hotels nearby the event

## GET to /food

Provides information about the restaurants nearby the event

## GET to /api-docs

Provides the API documentation.



## Development setup

To test in your development environment.

```sh
git clone https://github.com/RubDevs/MasterConf
cd MasterConf
npm install
```
create a .env file in root directory and fill every field according your local vars

```sh
npm start
```


## Release History

* 1.0.0
    * CHANGE: First release, provides general info, location, hotels and restaurants. 

## Meta

Ruben Hernandez – [@Rubdevs](https://twitter.com/Rubdevs) – ruben@rubdevs.com

Distributed under the MIT license.

[https://github.com/RubDevs/MasterConf](https://github.com/RubDevs/MasterConf)

## Contributing

1. Fork it (<https://github.com/RubDevs/MasterConf/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
