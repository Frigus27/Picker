// This file provides methods to operate the data of students in a high-abstracted way.
//

var data = require('./provider').dataProvider;

module.exports = {getClassInfo, setClassInfo, getClassName, setClassName};
// The function provides the class info directly by your index.
// Note: hard to use.
function getClassInfo(index) {
    return data.dataTree.classes[index];
}

// The function provides the way to set the class info
// Note: hard to use.
function setClassInfo(index, newClassInfo) {
    data.dataTree.classes[index] = newClassInfo;
    data.saveFile();
    data.loadFile();
}

// The function provides the name of the class you've selected by index.
function getClassName(index) {
    return getClassInfo(index).name;
}

function setClassName(index, newName) {

}


