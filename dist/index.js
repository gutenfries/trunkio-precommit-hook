#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const cwd = process.cwd().toString();
const trunk = `${cwd}/node_modules/@trunkio/launcher/trunk`;
if (process.platform === 'win32') {
    console.log('Error: Windows not supported.');
    process.exit(1);
}
function trunkExec() {
    let trunk_ = trunk + ' fmt';
    (0, child_process_1.spawn)(trunk_, { shell: true, stdio: 'inherit' });
}
trunkExec();
//# sourceMappingURL=index.js.map