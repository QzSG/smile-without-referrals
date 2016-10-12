# Smile without Referrals [![MIT license](https://img.shields.io/github/license/QzSG/smile-without-referrals.svg?maxAge=2592000&style=flat-square)](https://github.com/QzSG/smile-without-referrals/blob/master/LICENSE)

Chrome extension to automatically shop using Amazon Smile. It removes referral links too :smile:

## Getting Started
### I just want to use it! :smile: :+1:

Sadly this is the only way for now, I do not have a verified Chrome Webstore account :disappointed:

1. Clone or download this repository using the clone or download button at the top right
2. Go to: chrome://extensions inside Chrome, enable Developer mode and load the `app` folder as an unpacked extension.
3. Enjoy!

### Developer
```sh
# Clone using github or your favorite git client. 
git clone https://github.com/QzSG/smile-without-referrals.git <your folder name>
cd <your folder name>

#This app was generated using the amazing Yeoman using the official chrome generator. 
#Do this if you want to continue developement

npm install --global yo gulp bower

# Transform updated source written by ES2015 (default option)
gulp babel

# or Using watch to update source continuously
gulp watch

# Make a production version extension
gulp build
```

## Test Chrome Extension

To test, go to: chrome://extensions, enable Developer mode and load the `app` folder as an unpacked extension.

Need more information about Chrome Extension? Please visit [Google Chrome Extension Development](http://developer.chrome.com/extensions/devguide.html)

## Gulp tasks

### Babel

The generator supports ES 2015 syntax through babel transforming. You may have a source files in `script.babel` if your project has been generated without `--no-babel` options. While developing, When those of source has been changed, `gulp babel` should be run before test and run a extension on Chrome.

```sh
gulp babel
```

If you would like to have a continuous transforming by babel you can use `watch` task

### Watch

Watch task helps you reduce your efforts during development extensions. If the task detects your changes of source files, re-compile your sources automatically or Livereload([chromereload.js](https://github.com/yeoman/generator-chrome-extension/blob/master/app/templates/scripts/chromereload.js)) reloads your extension. If you would like to know more about Live-reload and preview of Yeoman? Please see [Getting started with Yeoman and generator-webapp](http://youtu.be/zBt2g9ekiug?t=3m51s) for your understanding.

```bash
gulp watch
```

### Build and Package

It will build your app as a result you can have a distribution version of the app in `dist`. Run this command to build Smile without Referrals.

```bash
gulp build
```

You can also distribute it with compressed file using the Chrome Developer Dashboard at Chrome Web Store. This command will compress your app built by `gulp build` command.

```bash
gulp package
```

### ES2015 and babel

ES2015 was used for developing the Chrome extensions. However, at this moment, you need to execute `babel` task of gulp to compile to test and run your extension on Chrome, because [ES2015 is not full functionality on Chrome as yet](http://kangax.github.io/compat-table/es6/).

The sources written by es2015 is located at `scripts.babel` and runnable sources are will be at `script` after compiling by `gulp babel`.

# Copyright & License

Copyright (c) QzSG - Released under the [MIT license](LICENSE).
