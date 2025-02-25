import { BsCcCircle } from "react-icons/bs";
import { genre, movie } from "./objects.js";
;
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWVhYzE0NTkzNTU2ODViMzkxNjBhY2QyZjM1MzBlYSIsIm5iZiI6MTczMjE0NTQ1OS44MzE5ODY0LCJzdWIiOiI2NzNlNmZlN2Y0MDI4MmViY2I5Yjc5YjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FXLuAw7a55sAtR0TQVGII1II_ATyiRE5DPDlyTN9CI'
    }
};

let genres = [];


// function getData() {


//     let genreList = JSON.parse(localStorage.getItem('genres'));
//     let movieList = JSON.parse(localStorage.getItem('movies'));


//     if (genreList) {

//         if (movieList) {


//             if (genreList[0].movies.length == 0) { setGenreMovies(genreList, movieList); }

//             else {

//                 return { genres: genreList, movies: movieList }

//             }



//         }
//         else { getMovies(); }
//     }
//     else { getGenres(); }

// }


// async function getGenres() {

//     const url = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';
//     const response = await fetch(url, options);
//     const json = await response.json();

//     json.genres.map((element) => {

//         const newGenre = { ...genre };

//         newGenre.setData(element.id, element.name);

//         genres.push(newGenre);

//     });

//     localStorage.setItem('genres', JSON.stringify(genres));

//     getData();

// }

function getData() {

    return JSON.parse(localStorage.getItem('movies'));

}


async function getGenres() {

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';
    const response = await fetch(url, options);
    const json = await response.json();
    let genres = [];

    json.genres.map((element) => {

        const newGenre = { ...genre };

        newGenre.setData(element.id, element.name);

        genres.push(newGenre);

    });

    localStorage.setItem('genres', JSON.stringify(genres));


}

async function getMovies(param) {

    getGenres();

    let url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
    let response = await fetch(url, options);
    let json = await response.json();
    let totalPages = '';

    let objectMovie = { ...movie };
    let allMovies = [];
    let movies = [];

    param === 'set'? totalPages = json.total_pages : totalPages = 10;


    function addMovie(movie, element) {

        return movie.setMovie(element.id, element.genre_ids, element.title, element.overview, element.poster_path, element.backdrop_path, element.vote_average);

    }

    for (let index = 1; index <=totalPages ; index++) {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${index}`
        response = await fetch(url, options);
        json = await response.json();
        allMovies.push(...json.results);
    }

    allMovies.forEach((element, index) => {

        objectMovie = { ...movie };

        if (index === 0) {

            element.overview ? movies.push(addMovie(objectMovie, element)) : '';

        }

        else {

            const validation = movies.filter((movie) => movie.id === element.id);

            if (validation.length <= 0) {

                element.overview ? movies.push(addMovie(objectMovie, element)) : '';

            }


        }


    })

    localStorage.setItem('movies', JSON.stringify(movies));
    return movies;

}

// async function getMovies() {

//     let url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
//     let response = await fetch(url, options);
//     let json = await response.json();
//     const totalPages = json.total_pages;
//     let allMovies = [];
//     let movies = [];

//     for (let index = 1; index <= totalPages; index++) {
//         url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${index}`
//         response = await fetch(url, options);
//         json = await response.json();
//         allMovies.push(...json.results);
//     }

//     allMovies.forEach((element, index) => {

//         let objectMovie = { ...movie };

//         if (index === 0) {

//             element.overview ? objectMovie.setMovie(element.id, element.genre_ids, element.title, element.overview, element.poster_path, element.backdrop_path, element.vote_average) : '';

//             element.overview ? movies.push(objectMovie) : '';

//         }

//         else {

//             const validation = movies.filter((movie) => movie.id === element.id);

//             if (validation.length <= 0) {

//                 element.overview ? objectMovie.setMovie(element.id, element.genre_ids, element.title, element.overview, element.poster_path, element.backdrop_path, element.vote_average) : '';

//                 element.overview ? movies.push(objectMovie) : '';


//             }


//         }


//     })

//     localStorage.setItem('movies', JSON.stringify(movies));

//     getData();

// }


async function getTrailer(id) {


    let url = `https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`;
    let response = await fetch(url, options);
    let json = await response.json();

    return json.results[0];


}

function getMovie(id) {

    const movies = JSON.parse(localStorage.getItem('movies'));

    const movie = movies.filter(movie => movie.id == id)

    return movie[0];
}

// function setGenreMovies(genres, movies) {
//     genres.forEach(genre => {
//         movies.forEach(movie => {
//             movie.idGenres.forEach(id => {
//                 genre.id == id ? genre.movies.push(movie) : '';
//             })

//         })


//     })

//     localStorage.setItem('genres', JSON.stringify(genres));

//     getData();


// }

function setGenreMovies() {

    const genres = JSON.parse(localStorage.getItem('genres'));
    const movies = JSON.parse(localStorage.getItem('movies'));

    if(genres[0].movies.length === 0){

        genres.forEach(genre => {
            movies.forEach(movie => {
                movie.idGenres.forEach(id => {
                    genre.id == id ? genre.movies.push(movie) : '';
                })
    
            })
    
    
        })

    }


 localStorage.setItem('genres', JSON.stringify(genres));

}

function getDataGenre(id, response) {

    const genres = JSON.parse(localStorage.getItem('genres'));
 
    const genre = genres.filter(genre => genre.id == id);

    if (response === 'name') return genre[0].name;

    return genre[0];

}

function getDataGenres() {

    const genres = JSON.parse(localStorage.getItem('genres'));

    return genres;

}


function getTheme() {


    const theme = JSON.parse(localStorage.getItem('theme'));

    if (theme) return theme;

    return 'dark';


}

function setThemeLocal(newTheme) {

    localStorage.setItem('theme', JSON.stringify(newTheme));

}

function getFavoriteMovies(id) {

    const movies = JSON.parse(localStorage.getItem('favoriteMovies'));

    if (movies) {

        if (id) {

            if (movies.filter((m) => m.id == id).length) return true;

            return false;

        }

        else {

            if (movies.length > 0) return movies;

            return false;

        }

    }

    else {

        return false;
    }



}

function setFavoriteMovies(item) {

    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));


    if (favoriteMovies) {

        const movies = [...favoriteMovies];
        const movie = favoriteMovies.filter((m) => m.id == item.id);

        if (!movie.length) {

            movies.push(item);
            localStorage.setItem('favoriteMovies', JSON.stringify(movies));

        }

        else {

            console.log(movies);

            let index = false;

            movies.map((movie, position) => {

                if (movie.id == item.id) index = position;


            })

            movies.splice(index, 1);
            localStorage.setItem('favoriteMovies', JSON.stringify(movies));


        }


    }

    else {

        const movies = [];

        movies.push(item);

        localStorage.setItem('favoriteMovies', JSON.stringify(movies));


    }

}

function getRelatedMovies(idGenre, idMovie) {


    const array = getDataGenre(idGenre).movies;
    let index = false;

    array.map((m, i) => {

        m.id == idMovie ? index = i : '';

    })

    array.splice(index, 1);

    const relatedMovies = array;

    return relatedMovies;


}

function searchMovies(search) {


    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=pt-BR&page=1';

}


export { getData, getDataGenre, getTheme, setThemeLocal, getMovie, getFavoriteMovies, setFavoriteMovies, getTrailer, getRelatedMovies, searchMovies, getMovies, setGenreMovies, getDataGenres };