'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

console.log(options.colors.bg);

const {border, bg} = options.colors; //destructurization
console.log(border);

// delete options.name;

// console.log(options);

for (let key in options) {
    if (typeof options[key] == 'object'){
        for (let key1 in options[key]){
            console.log(`Свойство ${key1} имеет значение ${options[key][key1]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
}

console.log(Object.keys(options).length);