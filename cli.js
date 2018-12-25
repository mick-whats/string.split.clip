#!/usr/bin/env node
const os = require('os');
const clipboardy = require('clipboardy');
const clip = clipboardy.readSync();
JSON.stringify(clip.split(os.EOL), null, 2);
clipboardy.writeSync(JSON.stringify(clip.split(os.EOL), null, 2));
console.info('clip: succeeded');
process.exit(0);
