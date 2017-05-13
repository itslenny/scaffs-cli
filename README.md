# ![Scaffs](https://raw.githubusercontent.com/itslenny/scaffs-cli/master/docs/images/Logo_Full_64.png)-CLI

[![Npm Version](https://img.shields.io/npm/v/scaffs-cli.svg?style=flat)](https://www.npmjs.com/package/scaffs-cli)
[![Npm Downloads](https://img.shields.io/npm/dm/scaffs-cli.svg?style=flat)](https://www.npmjs.com/package/scaffs-cli)
[![Build Status](https://travis-ci.org/itslenny/scaffs-cli.svg?branch=master)](https://travis-ci.org/itslenny/scaffs-cli)
[![Build status](https://ci.appveyor.com/api/projects/status/wfh45fnmixsnqkk6?svg=true)](https://ci.appveyor.com/project/itslenny/scaffs-cli)

This is the cli scaffs utility.

## Install

```
npm i -g scaffs-cli
```

## Examples

The gifs below show a simple example of scaffolding basic project from using the angular scaff from the [@scaffs registry](https://github.com/itslenny/scaffs-registry). This particular example is angular, but scaffs can be created for anything.

**Install, add scaff, create module**

![Setup and basic usage](https://raw.githubusercontent.com/itslenny/scaffs-cli/master/docs/images/01-cli-intro.gif)

**Create component**

![Create component](https://raw.githubusercontent.com/itslenny/scaffs-cli/master/docs/images/02-cli-component.gif)

**Create service**

![Create service](https://raw.githubusercontent.com/itslenny/scaffs-cli/master/docs/images/03-cli-service.gif)

## Usage

### Help screen

```
scaffs help
```

### List available scaffs

```
scaffs list
```

### New files from scaffold - basic

Simply running the new command with a scaffold name will prompt you for any variables defined by the scaffold (e.g name, target path, etc) then it will generate files based on the scaffold

```
scaffs new ScaffoldName
```

> You can create your own scaffs or install them from the @scaffs registry ([learn more about both below](#additional-resources)).

### Scaffold - providing data with flags

You can bypass the prompts by simply providing all the needed data in flags.

* `--target` = the path where you want to place the generated files
* `--data.name` = by convention this is the name of the component
* `--data.otherValue` = other value(s) you need to pass into the template

```
scaffs new ScaffoldName --target /create/at/this/path --data.name my thing --data.someNumbers=[1,3,5,7,9]
```

### Scaffold - by path

You can load scaffolds by name (explained above) or by providing a relative/absolute path to the scaffold with the `--source` flag.

```
scaffs new --source ./path/to/scaffs/my-scaff
```

> This can be used in conjunction with any of the flags explained above

## Additional resources

* [Scaffs library / programmatic usage](https://github.com/itslenny/scaffs) | [npm](https://www.npmjs.com/package/scaffs)
* [Scaffs cli / command line usage](https://github.com/itslenny/scaffs-cli) | [npm](https://www.npmjs.com/package/scaffs-cli)
* [Scaffs vs code plugin](https://github.com/itslenny/scaffs-vscode) | [vs code marketplace](https://marketplace.visualstudio.com/items?itemName=itslennysfault.scaffs-vscode)
* [@scaffs registry](https://github.com/itslenny/scaffs-registry) | [npm](https://www.npmjs.com/~scaffs)
* [Using scaffs config](https://github.com/itslenny/scaffs/tree/master/docs/md/config.md)
* [Creating scaffs](https://github.com/itslenny/scaffs/tree/master/docs/md/create.md)

## Contributing

* [Contributing to Scaffs](CONTRIBUTING.md)
* Contributing a Scaff

## TODO

* Add comments
* Add more tests
* Break up documentation into separate pages
* Refactor to Async/Await
