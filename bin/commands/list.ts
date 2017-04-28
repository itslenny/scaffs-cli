/**
 * Copyright (C) Lenny Urbanowski 2017.
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

import { Scaffolder } from 'scaffs';

const cwd = process.cwd();

export async function listCommand(cliArguments: Object) {

    try {
        let scaffsConfig = await Scaffolder.loadScaffsConfig(cwd);

        let availableScaffNames: string[] = Object.keys(scaffsConfig.absoluteScaffPaths);
        console.log(' ');
        console.log('---------------------------------');
        console.log('AVAILABLE SCAFFS!!');
        console.log('---------------------------------');
        console.log(' ');
        for (let i = 0, len = availableScaffNames.length; i < len; i++) {
            console.log(' - ' + availableScaffNames[i]);
        }
    } catch (e) {
        console.log('Unable to find any scaffs. Check your configuration file.');
    }
    console.log(' ');
}