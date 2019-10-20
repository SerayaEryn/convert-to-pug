# convert-to-pug

`convert-to-pug` coverts jade templates to pug templates. It changes all occurrences of legacy mixin calls, attribute interpolation and prefixed each or for loops to the new syntax.

## Install

```
npm install -g convert-to-pug
```

## Usage

Convert a .jade file to a .pug file:
```bash
convert-to-pug template.jade
```
Convert all .jade files in a directory:
```bash
convert-to-pug views/
```
## License

[MIT](./LICENSE)
