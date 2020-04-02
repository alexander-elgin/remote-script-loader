# Remote Script Loader

## Install
```sh
$ npm install remote-script-loader
```

## Usage
```javascript
import { loadScript } from 'remote-script-loader';

loadScript('<SCRIPT-URL>').then(() => {
    // Use the script like it was loaded using <script src="<SCRIPT-URL>"></script>
});
```
