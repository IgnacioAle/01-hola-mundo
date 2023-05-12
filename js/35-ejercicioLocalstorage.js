'use strict'

let form = document.querySelector("#formMovies");
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    let title = document.querySelector('#addMovie').value;
    localStorage.setItem('movieTitle', title); // Guarda el título en el almacenamiento local
    if (title.length >= 1) {
        console.log("Título guardado en el almacenamiento local: " + title);
    }
});

let ul = document.querySelector('#movieList');
for (let i in localStorage) {
    if (typeof (localStorage[i] == 'string')) {
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li)
    }
}