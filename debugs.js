// This file provides spaces to write debugging codes.

function TestForProvider() {
    //
    const data = require('./kernel/provider').dataProvider;
    data.dataTree.classes[0].name = "My Class UTF8测试";
    data.saveFile();
    console.log(data.toString());
}

function TestForBasicStudentFunctions() {
    const laModule = require('./kernel/students');
    var class0 = laModule.getClassInfo(0);
    console.log(JSON.stringify(class0));
    var class1 = class0;
    class1.theFactOfTheWorld = 42;
    laModule.setClassInfo(0, class1);
    class0 = laModule.getClassInfo(0);
    console.log(JSON.stringify(class0));
}
