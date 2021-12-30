#!/usr/bin/env node

// This compiles the output format file "/twingex.js", which is used by Twine2 

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const outputFilePath = path.join(__dirname, './twingex.js');

function GetCurrentSemVer() {
  const text = fs.readFileSync(outputFilePath).toString()
  const versionStr = text.split('"version": "').pop();
  if (!versionStr) {
    throw new Error(`cannot find version string in "${outputFilePath}"`)
  }
  const semVer = versionStr.split('",').shift();
  return semVer;
}

function GetNewVersion() {
  const semVer = GetCurrentSemVer();
  const [major, minor, patch] = semVer.split('.').map(v => +v);
  const newSemVer = [major, minor, patch + 1].join('.')
  return newSemVer;
}

function GetTemplateSource() {
  const templatePath = path.join(__dirname, './templateSource.html');
  const templateStr = fs.readFileSync(templatePath).toString();
  return templateStr;
}

const VERSION = GetNewVersion();

const outputObj = {
  "name": "TwingeX",
  "version": VERSION,
  "author": "Ben Winding",
  "description": "The extremely simple 'twingex' format.",
  "image": "icon.svg",
  "url": "http://github.com/benwinding/twingex/",
  "license": "MIT License",
  "proofing": false,
  "source": GetTemplateSource(),
};

const outputStr = `window.storyFormat(${JSON.stringify(outputObj, null, 2)})`
fs.writeFileSync(outputFilePath, outputStr);

console.log(' --- finished building twingex version: ' + VERSION)
if (process.argv.includes('--tag'))  {
  console.log(' --- running git tag for version: ' + VERSION)
  execSync('git add .', {cwd: __dirname});
  execSync(`git commit -am "Built: ${VERSION}"`, {cwd: __dirname});
  execSync(`git tag "${VERSION}"`, {cwd: __dirname});
}
