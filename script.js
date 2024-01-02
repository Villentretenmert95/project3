/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}

function rememberMyFilms() {

    loop: for (let i = 0; i < 2; i++) {
    
        const filmName = prompt("Your last watched film?", ""),
              filmRate = +prompt("Your grade for the film:", "");
      
        if ( filmName == null|| filmName == '' || filmName.length > 50 || filmRate > 10 || filmRate < 0 || filmRate == null ) {
            console.log(filmName);
            console.log("Error try again!");
            i--;
        } else {
            personalMovieDB.movies[filmName] = filmRate;
            console.log("Done!");
        }
    
    }

}

rememberMyFilms();

function detectPersonalLevel() {

    if ( personalMovieDB.count < 10 ) {
        alert("Not much!");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("classical wathcer");
    } else if ( personalMovieDB.count > 30 ) {
        alert("Too much!");
    } else {
        alert("Error!");
    }  

}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        while (favGenre == null || favGenre == '') {
            favGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        personalMovieDB.genres.push(favGenre);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) console.log(hidden);
}

showMyDB(personalMovieDB.privat);