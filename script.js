'use strict';

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script, 1);
//     document.head.append(script);
    
//   }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script, a) => {
//   alert(`Здорово, скрипт ${script.src} загрузился`);
//   alert( _ ); // функция, объявленная в загруженном скрипте
//   alert( a );
// });

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onerror = function() { alert(`error ${this.src}`) };
    script.onload = () => callback(script);
    alert('test1');
    document.head.append(script); //выполнение всех предыдущих шагов происходит после аппенда на страницу
  }

loadScript('script1.js', function(script) {
  // эта функция вызовется после того, как загрузится скрипт
  alert(script.src);
  alert(sayHello('TEST')); // теперь всё работает
});