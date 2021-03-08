function capi(from) {
    var p;
    if( from === "a")
    {
        p="A";
    }
    if( from === "b")
    {
        p="B";
    }
    if( from === "c")
    {
        p="C";
    }
    if( from === "d")
    {
        p="D";
    }
    if( from === "e")
    {
        p="E";
    }
    if( from === "f")
    {
        p="F";
    }
    return p;
}

a = prompt("input your score");

function toStr(from){
    var y;
    if( from >= 90)
    {
        y="a";
    }
    else if( from >= 80)
    {
        y="b";
    }
    else if( from >= 70)
    {
        y="c";
    }
    else if( from >= 60)
    {
        y="d";
    }
    else if( from >= 50)
    {
        y="e";
    }
    else
    {
        y="f";
    }
    return y;
}

alert( capi( toStr(Number(a)) ) );

