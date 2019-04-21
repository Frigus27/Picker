// This file provides methods to operate the data file directly.
// Comment:
// It's only a low-level abstraction. You should not use the methods
// given in this file in order to avoid the errors that may cause problems
// like losing data and so on.
//

`use strict`;

class DataProvider {
    constructor() {
        const fs = require('fs');
        this.filePath = "./data/data.json";
        this.dataTree  = JSON.parse(fs.readFileSync(this.filePath, 'UTF-8'));
    };

    loadFile() {
        const fs = require('fs');
        this.dataTree  = JSON.parse(fs.readFileSync(this.filePath, 'UTF-8'));
    }

    saveFile() {
        const fs = require('fs');
        fs.writeFileSync(this.filePath, this.toTree());
    }

    toString() {
        return JSON.stringify(this.dataTree);
    }

    toTree() {
        return JSON.stringify(this.dataTree, null, '    ');
    }
}

var dataProvider = new DataProvider();
module.exports = {dataProvider};