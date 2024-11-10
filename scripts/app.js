const container = document.querySelector('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterUrl = document.querySelector ('.userInputPosterUrl');
const movieYear = document.querySelector ('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem ('title');
let imageUrlInStorage = localStorage.getItem ('imageUrl');
let yearInStorage = localStorage.getItem ('year')

if (titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(83, 83, 165, 0.582), rgba(56, 38, 38, 0.568)), url('${imageUrlInStorage}')`;
}

if (yearInStorage) {
    movieYearToDisplay.textContent = yearInStorage;
}

btn.addEventListener('click', ()=> {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(83, 83, 165, 0.582), rgba(56, 38, 38, 0.568)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});

