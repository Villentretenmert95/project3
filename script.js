'use strict';

function zcall(arg, callback){
    console.log(`call ${arg}`);
    callback();
}

function zdone(){
    console.log(`done`);
}

zcall('test', zdone);