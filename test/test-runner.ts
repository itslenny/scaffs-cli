/**
 * Copyright (C) Lenny Urbanowski 2017.
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

import * as jasmine from 'jasmine-node';

// Jasmine

const options: jasmine.ExecuteSpecsOptions = {
    specFolders: ['./bin'],
    regExpSpec: /\.spec\.ts/,
    isVerbose: true,
};

jasmine.executeSpecsInFolder(options);
