#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const appPath = fs.realpathSync(process.cwd());
const localAppPath = path.dirname(__dirname);

/* eslint */
const eslintrcPath = path.join(localAppPath, '.eslintrc.js');
const eslintignorePath = path.join(localAppPath, '.eslintignore');

fs.copyFileSync(eslintrcPath, path.join(appPath, '.eslintrc.js'));
fs.copyFileSync(eslintignorePath, path.join(appPath, '.eslintignore'));

/* prettier */
const prettierrcPath = path.join(localAppPath, '.prettierrc');
const prettierignorePath = path.join(localAppPath, '.prettierignore');

fs.copyFileSync(prettierrcPath, path.join(appPath, '.prettierrc'));
fs.copyFileSync(prettierignorePath, path.join(appPath, '.prettierignore'));

/* lint-staged */
const lintStagedPath = path.join(localAppPath, '.lintstagedrc');
fs.copyFileSync(lintStagedPath, path.join(appPath, '.lintstagedrc'));

/* commitlint */
const commitlintPath = path.join(localAppPath, 'commitlint.config.js');
fs.copyFileSync(commitlintPath, path.join(appPath, 'commitlint.config.js'));
