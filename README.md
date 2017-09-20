## TwingeX
An export format for the **Twine** interactive fiction browser. Based on the Entweedle format

### Features
- Exports simple twine compatible code

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