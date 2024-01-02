// Место для первой задачи
function sayHello(name) {
    if (typeof name == 'string') return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
  if (typeof num == 'number') return [num - 1, num, num + 1];
}

function getMathResult(arg1, arg2) {
    let result = '';
    if (typeof arg1 != 'number') return;
    if (typeof arg2 != 'number' || arg2 < 0 || arg2 === 0) {
        return arg1;
    } else {
        for (let i = 1; i <= arg2; i++) {
            result +=  `${arg1 * i}---`;
        }
       return result.slice(0, -3);
    }
    
}

console.log(getMathResult(3, 1));