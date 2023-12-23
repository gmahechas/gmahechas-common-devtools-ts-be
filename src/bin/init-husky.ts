#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import husky from 'husky';

const appPath = fs.realpathSync(process.cwd());
const huskyPath = path.join(appPath, '.husky');
husky.install(huskyPath);

const preCommitPath = path.join(huskyPath, 'pre-commit');
if (fs.existsSync(preCommitPath)) {
	fs.unlinkSync(preCommitPath);
}
husky.add(preCommitPath, 'pnpm lint-staged');


const commitMsgPath = path.join(huskyPath, 'commit-msg');
if (fs.existsSync(commitMsgPath)) {
	fs.unlinkSync(commitMsgPath);
}
husky.add(commitMsgPath, 'pnpm commitlint');