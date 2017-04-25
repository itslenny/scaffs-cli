/**
 * Copyright (C) Lenny Urbanowski 2017.
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

import { commands } from './';

const packageJson = require('../../package.json');
const version = packageJson && packageJson.version;

export function helpCommand(cliArguments: Object) {
    console.log(' ');
    console.log('-------------------------');
    console.log(`SCAFFS ${version} - HELP!!!`);
    console.log('-------------------------');
    console.log(' ');
    for (let name in commands) {
        if (commands.hasOwnProperty(name)) {
            let { help } = commands[name];
            console.log(`${name} - ${help}`);
        }
    }
    console.log(' ');
}