`use strict`;

class DataProvider {
    constructor() {
        const fs = require('fs');
        this.filePath = "./data/data.json";
        this.dataTree  = JSON.parse(fs.readFileSync(this.filePath, 'UTF-8'));
    };

    loadFile() {
        this.dataTree  = JSON.parse(fs.readFileSync(this.filePath, 'UTF-8'));
    }

    saveFile() {
        fs.writeFile(this.filePath, JSON.stringify(this.objectTree, null, ' '));
    }

    toString() {
        return JSON.stringify(this.dataTree, null, '    ');
    }
}

var dataProvider = new DataProvider();
module.exports = {dataProvider};