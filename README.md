## TwingeX
An export format for the **Twine** interactive fiction browser. Based on the Entweedle format

### Features
- Exports simple twine compatible code

### Install Format
Assuming you have Twine2 installed, simply follow these steps:

1. Home > Formats
2. Paste following link into: **Add a new format**

`https://cdn.jsdelivr.net/gh/benwinding/twingex@master/twingex.js`

### Use in the Terminal!
This format is intended to be used for scripting on the commandline.

1 Publish as TwingeX format (a .html file)
2 Use chrome headless to evaluate html and javascript

`$ google-chrome --headless --disable-gpu --dump-dom file:///home/Documents/twingex-story-output.html`

This outputs raw html

3 Pipe this into a html parser that will display the plain text in the terminal

`$ google-chrome --headless --disable-gpu --dump-dom file:///home/Documents/twingex-story-output.html | hermit`

### Required
- chrome 59 or greater
- [hermit](https://github.com/thlorenz/hermit) command line html parser

### Development

- Run `./build.js` to rebuild the exporter (`./twingex.js`)
- Run `./build.js --tag` to run the git tag as well
