#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const appPath = fs.realpathSync(process.cwd());
const appPackageJson = fs.readFileSync(path.join(appPath, 'package.json'), 'utf8');
const appPackageJsonParsed = JSON.parse(appPackageJson);

const parentFolderPath = path.dirname(__dirname);
const localPackageJson = fs.readFileSync(path.join(parentFolderPath, 'package.json'), 'utf8');
const localPackageJsonParsed = JSON.parse(localPackageJson);

if (!appPackageJsonParsed.devDependencies) {
	appPackageJsonParsed.devDependencies = {};
}

appPackageJsonParsed.devDependencies = Object.assign(appPackageJsonParsed.devDependencies, localPackageJsonParsed.devDependencies);

fs.writeFileSync(path.join(appPath, 'package.json'), JSON.stringify(appPackageJsonParsed, null, 2));