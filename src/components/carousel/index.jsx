import React from "react";
import Card from "../card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carousel = ({ movies }) => {

    let perview;

    movies.length > 2 ? perview = 3 : perview = movies.length



    return (

        <Swiper

            modules={[Navigation, A11y]}
            spaceBetween={1}
            slidesPerView={perview}
            navigation

        >

            {movies.map((movie) => {

                return (

                    <SwiperSlide key={movie.id}>

                        <Card  id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} favorite={true} />

                    </SwiperSlide>


                )




            })}




        </Swiper>



    )
}

export default Carousel