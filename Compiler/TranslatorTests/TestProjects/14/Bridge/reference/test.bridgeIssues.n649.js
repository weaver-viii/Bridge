﻿(function (globals) {
    "use strict";

    Bridge.define('Test.BridgeIssues.N649.TestClassA', {
        DoSomething: function (i) {
            //It should not change case of Console.WriteLine
            Bridge.Console.log("Say something");
        }
    });
    
    
    
    Bridge.init();
})(this);
