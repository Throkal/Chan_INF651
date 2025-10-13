// this array will store all the movies
let movies = [];

// for adding new movie to the list
function addMovie(title) {
    const trimmedTitle = title.trim(); // remove space before/after title
    if (!trimmedTitle) {
        return;
    } // ignore if empty input
    movies.push(trimmedTitle);
    showMovies();
}

// for removing movies from list by index
function removeMovie(index) {
    if (index < 0 || index >= movies.length) {
        return;
    }
    movies.splice(index, 1);
    showMovies();
}

// show movie list on the page
function showMovies() {
    const list = document.getElementById("movie-list");
    list.innerHTML = "";

    if (movies.length === 0) {
        // give a message when the movie list is empty
        const li = document.createElement("li");
        li.className = "collection-item";
        li.textContent = "No movies yet! Add some :D";
        list.appendChild(li);
        return;
    }

    // for creating a list item for each movie
    for (let i = 0; i < movies.length; i++) {
        const li = document.createElement("li");
        li.className = "collection-item";

        // create a span to show movie title
        const spanTitle = document.createElement("span");
        spanTitle.className = "movie-title";
        spanTitle.textContent = movies[i];

        // create a "Watched" button
        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Watched";

        // when the button is clicked, remove that movie
        removeBtn.onclick = function () {
            removeMovie(i);
        };
        // add movie title and button to the list item
        li.appendChild(spanTitle);
        li.appendChild(removeBtn);
        list.appendChild(li);
    }
}

// run when page loads
function start() {
    showMovies();
    let input = document.getElementById("movie-name");
    let addButton = document.getElementById("add-movie-btn");

    // when user clicks the button, add the movie
    addButton.onclick = function () {
        addMovie(input.value);
        input.value = "";
        input.focus();
    };
}
document.addEventListener("DOMContentLoaded", start);
