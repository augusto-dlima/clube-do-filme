import { genre, movie } from "./objects.js";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWVhYzE0NTkzNTU2ODViMzkxNjBhY2QyZjM1MzBlYSIsIm5iZiI6MTczMjE0NTQ1OS44MzE5ODY0LCJzdWIiOiI2NzNlNmZlN2Y0MDI4MmViY2I5Yjc5YjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FXLuAw7a55sAtR0TQVGII1II_ATyiRE5DPDlyTN9CI'
    }
};

let genres = [];

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

    const localMovies = JSON.parse(localStorage.getItem('movies'));

    if(localMovies){

        if(localMovies.length>200) return localMovies ; 
    }

    getGenres();

    let url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
    let response = await fetch(url, options);
    let json = await response.json();
    let totalPages = '';

    let objectMovie = { ...movie };
    let allMovies = [];
    let movies = [];

    param === 'add'? totalPages = json.total_pages : totalPages = 10;


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

            if(element.overview){

                element.backdrop_path? movies.push(addMovie(objectMovie, element)) : '';
            }


        }

        else {

            const validation = movies.filter((movie) => movie.id === element.id);

            if (validation.length <= 0) {

                if(element.overview){

                    element.backdrop_path? movies.push(addMovie(objectMovie, element)) : '';
                }

            }


        }


    })


    localStorage.setItem('movies', JSON.stringify(movies));
    return movies;

}


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


function setGenreMovies() {

    const genres = JSON.parse(localStorage.getItem('genres'));
    const movies = JSON.parse(localStorage.getItem('movies'));
    const indexMovies = JSON.parse(localStorage.getItem('indexSetGenres'));

    if(genres[0].movies.length === 0 || indexMovies < movies.length){

        genres.forEach(genre => {
            genre.movies = [];
            movies.forEach(movie => {
                movie.idGenres.forEach(id => {
                    genre.id == id ? genre.movies.push(movie) : '';
                })
    
            })
    
        })

        localStorage.setItem('genres', JSON.stringify(genres));
        localStorage.setItem('indexSetGenres',JSON.stringify(movies.length));
    }



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


    const array = getDataGenre(idGenre)


    if(array==undefined)return false;

    let index = false;

    array.movies.map((m, i) => {

        m.id == idMovie ? index = i : '';

    })

    array.movies.splice(index, 1);

    const relatedMovies = array.movies;

    return relatedMovies;


}

async function searchMovies(title) {

    const movies = [];
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=pt-BR&page=1`;
        const response = await fetch(url,options);
        const searchMovies = await response.json();

        if(response.status == 200){ 

            searchMovies.results.map((element)=>{

                const newMovie = {...movie}

                if(element.backdrop_path){

                    movies.push(newMovie.setMovie(element.id, element.genre_ids, element.title, element.overview, element.poster_path, element.backdrop_path, element.vote_average));

                }
        
        
            })

            const localMovies = await getMovies();

            movies.map((movieApi)=>{

                let validation = false;

                localMovies.map((localMovie)=>{
                    movieApi.id == localMovie.id? validation = true : ''; 
                })

                if(!validation) localMovies.push(movieApi);

            })


            localStorage.setItem('movies',JSON.stringify(localMovies));
            setGenreMovies();
            return movies;
        }
    
}


export { getData, getDataGenre, getTheme, setThemeLocal, getMovie, getFavoriteMovies, setFavoriteMovies, getTrailer, getRelatedMovies, searchMovies, getMovies, setGenreMovies, getDataGenres };