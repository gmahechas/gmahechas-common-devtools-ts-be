#!/usr/bin/env node
import fs from 'fs';
import { add, install } from 'husky';
import path from 'path';

const appPath = fs.realpathSync(process.cwd());
const huskyPath = path.join(appPath, '.husky');
install(huskyPath);

const preCommitPath = path.join(huskyPath, 'pre-commit');
if (fs.existsSync(preCommitPath)) {
	fs.unlinkSync(preCommitPath);
}
add(preCommitPath, 'pnpm lint-staged');

const commitMsgPath = path.join(huskyPath, 'commit-msg');
if (fs.existsSync(commitMsgPath)) {
	fs.unlinkSync(commitMsgPath);
}
add(commitMsgPath, 'pnpm commitlint');
