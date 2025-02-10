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


function getData() {


    let genreList = JSON.parse(localStorage.getItem('genres'));
    let movieList = JSON.parse(localStorage.getItem('movies'));


    if (genreList) {

        if (movieList) {


            if (genreList[0].movies.length == 0) { setGenreMovies(genreList, movieList); }

            else {

                return { genres: genreList, movies: movieList }

            }



        }
        else { getMovies(); }
    }
    else { getGenres(); }
    
}

async function getGenres() {

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';
    const response = await fetch(url, options);
    const json = await response.json();

    json.genres.map((element) => {

        const newGenre = { ...genre };

        newGenre.setData(element.id, element.name);

        genres.push(newGenre);

    });

    localStorage.setItem('genres', JSON.stringify(genres));

    getData();

}

async function getMovies() {

    let url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
    let response = await fetch(url, options);
    let json = await response.json();
    const totalPages = json.total_pages;
    let allMovies = [];
    let movies = [];

    for (let index = 1; index <= totalPages; index++) {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=${index}`
        response = await fetch(url, options);
        json = await response.json();
        allMovies.push(...json.results);
    }

    allMovies.forEach(element => {

        let objectMovie = { ...movie };

        element.overview ? objectMovie.setMovie(element.id, element.genre_ids, element.title, element.overview, element.poster_path, element.backdrop_path, element.vote_average) : '';
        element.overview ? movies.push(objectMovie) : '';

    })

    localStorage.setItem('movies', JSON.stringify(movies));

    getData();

}

function setGenreMovies(genres, movies) {
    genres.forEach(genre => {
        movies.forEach(movie => {
            movie.idGenres.forEach(id => {
                genre.id == id ? genre.movies.push(movie) : '';
            })

        })


    })

    localStorage.setItem('genres', JSON.stringify(genres));

    getData();


}


export default getData;