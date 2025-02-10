import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/home'
import Genres from '../../pages/genres'
import Favorites from '../../pages/favorites'
import Search from '../../pages/search'



const Router = () => {


    return (

        <>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/genres' element={<Genres />} />
                <Route path='/favoites' element={<Favorites />} />
                <Route path='/search' element={<Search />} />


            </Routes>

        </>


    )


}

export default Router