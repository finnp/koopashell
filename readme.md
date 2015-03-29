# koopashell
[![NPM](https://nodei.co/npm/isequal.png)](https://nodei.co/npm/isequal/)

Sophisticated shell testing framework™ 

![Koopa](koopa.jpg) red or green?

## usage
```sh
koopashell [assertname] value
```

`deepEqual` is the default for `assertname`. for a reference see: https://www.npmjs.com/package/assert

koopashell will compare the stdin input with the specified strings using the `assertname` function.

## examples

```sh
echo "incabell" | koopashell "incabell\n"
ok
```

```sh
echo "incabell" | koopashell equal "incabell\n"
ok
```

```sh
echo "incabell" | koopashell notEqual "jona"
ok
```

```sh
echo "incabell" | koopashell equal "jona"
assert.js:87
  throw new assert.AssertionError({
        ^
AssertionError: 'incabell\n' == 'jona'
    at /Users/finn/code/npm/koopashell/cli.js:15:20
    at ConcatStream.<anonymous> (/Users/finn/code/npm/koopashell/node_modules/concat-stream/index.js:32:43)
    at emitNone (events.js:72:20)
    at ConcatStream.emit (events.js:163:7)
    at finishMaybe (/Users/finn/code/npm/koopashell/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:460:14)
    at endWritable (/Users/finn/code/npm/koopashell/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:469:3)
    at ConcatStream.Writable.end (/Users/finn/code/npm/koopashell/node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js:436:5)
    at Socket.onend (_stream_readable.js:489:10)
    at Socket.g (events.js:257:16)
    at emitNone (events.js:72:20)
```


