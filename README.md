# swint-copy-dir

[![Greenkeeper badge](https://badges.greenkeeper.io/Knowre-Dev/swint-copy-dir.svg)](https://greenkeeper.io/)
The directory copying function wrapped for swint-task

**Warning: This is not the final draft yet, so do not use this until its official version is launched**

## Installation
```sh
$ npm install --save swint-copy-dir
```

## Options
* `inDir` : `String`, default: `path.dirname(require.main.filename)`
* `outDir` : `String`, default: `path.join(path.dirname(require.main.filename), '../out')`

## Usage
```javascript
copyDir({
	inDir: path.join(__dirname, 'fonts'),
	outDir: path.join(__dirname, 'out/fonts')
}, function() {
	// Build complete
});
```
