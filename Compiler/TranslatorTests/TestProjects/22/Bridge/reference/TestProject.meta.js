Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";


        var $m = Bridge.setMetadata,
            $n = [System,TestProject1];
        $m($n[1].Program, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"Prop","t":16,"rt":A,"g":{"a":2,"n":"get_Prop","t":8,"rt":A,"fg":"Prop"},"s":{"a":2,"n":"set_Prop","t":8,"p":[A],"rt":$n[0].Void,"fs":"Prop"},"fn":"Prop"},{"a":2,"n":"Prop2","t":16,"rt":m2.TestProject1.Root2.A,"g":{"a":2,"n":"get_Prop2","t":8,"rt":m2.TestProject1.Root2.A,"fg":"Prop2"},"s":{"a":2,"n":"set_Prop2","t":8,"p":[m2.TestProject1.Root2.A],"rt":$n[0].Void,"fs":"Prop2"},"fn":"Prop2"}]}; });
        $m(A, function () { return {"td":,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
        $m(m2.TestProject1.Root2, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
        $m(m2.TestProject1.Root2.A, function () { return {"td":m2.TestProject1.Root2,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; });
});
