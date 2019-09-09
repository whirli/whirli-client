# Whirli Javascript Client

The Whirli Javascript Client provides convenient access to the Whirli API from applications written in javascript.

## Documentation

See the [Whirli API docs](https://github.com/whirli/whirli-api). 

## Installation

Install the package with:

```shell
yarn add whirli-client
```

## Usage
The client requires a Http Client (such as axios) to be passed in to the constructor. It will then use this client for all requests. 

Simply import the Client and passed it the Http Client, and you're good to go:

```javascript
import axios from 'axios';
import Client from 'whirli-client';

...

const api = new Client(axios);
const products = api.search.products();
```

### Usage with Typescript
Types are included with this package.

```javascript
import axios from 'axios';
import Client from 'whirli-client';

...

const api: Client = new Client(axios);
```

### Usage with Nuxt
Simply import the Client into a plugin file, and then inject it as you need it:

```javascript
import Client from 'whirli-client';

export default function ( { app: { $axios } ) {
   inject('whirli', Client($axios));
}
```

## Development
### Linting
```shell
yarn lint
```

### Type checking
```shell
yarn type-check
yarn type-check:watch
```

### Build
```shell
yarn build
```

### Publishing
- Lint and type-check 
- Build 
- Commit (including dist directory)
- Tag
- Push 
