## How to use this preset?
Well, it's quite simple and similar to any other babel-preset.
Just add "flow-vue" to the list of presets in your .babelrc file.

### Case 1: If you are using `.babelrc`
For example, consider that you have .babelrc as 
```
{
  "presets": [
      "es2015"
   ],
}
```

Just change it to
```
{
  "presets": [
      "es2015", 
      "flow-vue"
   ],
}
```

### Case 2: If you are using `babel.config.js`
For example, consider that you have babel.config.js as
```
module.exports = {
  presets: [
      "es2015"
  ],
};
```
Just change it to 
```
module.exports = {
  presets: [
      "es2015", 
      "flow-vue"
  ],
};
```
