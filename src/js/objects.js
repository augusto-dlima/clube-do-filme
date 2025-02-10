let genre = {

    id: '',
    name:'',
    movies:[],
    addMovie:function(movie){

        this.movies.push(movie);
        console.log('Filme adicionado com sucesso');
    },
    setData:function(newId,newName){

        this.id = newId;
        this.name = newName;

        return this;

    }

}

let movie = {

    id:'',
    idGenres:[],
    title:'',
    overView: '',
    posterPath: '',
    backdropPath: '',
    voteAverage: '',
    setMovie:function(id,idGenres,title,overView,posterPath,backdropPath,voteAverage)
    {
        this.id = id;
        this.idGenres = idGenres;
        this.title = title;
        this.overView = overView;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
        this.voteAverage = voteAverage;

        return this;

    }

}

export  {genre, movie}