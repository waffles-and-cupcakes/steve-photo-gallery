# AirBnC Room Listing Reviews

> A room listing app for travellers to find places to stay

## Related Projects

  - AirBnC Full App: https://github.com/waffles-and-cupcakes/steve-proxy
  - AirBnC Listing Description: https://github.com/waffles-and-cupcakes/shiyao-listingDescription
  - AirBnC Reviews: https://github.com/waffles-and-cupcakes/belinda-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To build the application 
```sh
npm run build
npm run db:setup
npm run prod:server
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0 and up
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

To start dev environment

```sh
npm db:setup
npm run dev:react
npm run dev:server
```