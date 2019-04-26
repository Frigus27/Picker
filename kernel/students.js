// This file provides methods to operate the data of students in a high-abstracted way.
//

var data = require('./provider').dataProvider;

class Config {

    constructor() {
        this.selectedConfigs = {
            class: 0,
            state: 0
        };
    }

    // This function provides the way to select current class and state.
    select(newClassIndex, newStateIndex) {
        this.selectedConfigs.class = newClassIndex;
        this.selectedConfigs.state = newStateIndex;
    }

    get ClassIndex() {
        return this.selectedConfigs.class;
    }

    get StateIndex() {
        return this.selectedConfigs.state;
    }
};

var config = new Config();

// This function will update the data in the file. 
function updateData() {
    data.saveFile();
    // Make sure the data loaded in memory will not cause errors
    data.loadFile();
}

// The function provides the class info directly by your index.
// Note: only provided for the kernel function
function getClassInfo() {
    return data.dataTree.classes[config.ClassIndex];
}

// The function provides the way to set the class info
// Note: only provided for the kernel function
function setClassInfo(newClassInfo) {
    data.dataTree.classes[config.ClassIndex] = newClassInfo;
    updateData();
}

function getClassName() {
    return getClassInfo().name;
}

function setClassName(newName) {
    let newClassTree = getClassInfo();
    newClassTree.name = newName;
    setClassInfo(newClassTree);
}


module.exports = {config, getClassInfo, setClassInfo, getClassName, setClassName};