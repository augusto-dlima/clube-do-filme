import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/home'
import Genres from '../../pages/genres'
import Favorites from '../../pages/favorites'
import Search from '../../pages/search'
import Genre from '../../pages/genre'
import MovieDetails from "../../pages/movie";



const Router = () => {


    return (

        <>

            <Routes>

                <Route path='/clube-do-filme' element={<Home />} />
                <Route path='/clube-do-filme/genres' element={<Genres />} />
                <Route path='/clube-do-filme/genre/:id' element={<Genre />} />
                <Route path='/clube-do-filme/movie/:id' element={<MovieDetails />} />
                <Route path='/cluble-do-filme/favorites' element={<Favorites />} />
                <Route path='/clube-do-filme/search' element={<Search />} />


            </Routes>

        </>


    )


}

export default Router