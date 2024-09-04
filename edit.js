#!/usr/bin/env node

const { exec } = require('child_process');
exec('./edit.sh', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing script: ${err}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});