#!/usr/bin/env node
'use strict';
import { spawn } from 'child_process';
const cwd: string = process.cwd().toString();
const trunk: string = `${cwd}/node_modules/@trunkio/launcher/trunk`;

if (process.platform === 'win32') {
	console.log('Error: Windows not supported.');
	process.exit(1);
}

function trunkExec(): void {
	let trunk_ = trunk + ' fmt';
	spawn(trunk_, { shell: true, stdio: 'inherit' });
}
trunkExec();
