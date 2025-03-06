import React, {useState, useEffect} from "react";
import Card from "../card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carousel = ({ movies }) => {

        const [width, setWidth] = useState(window.innerWidth);
        let perview = 2;
        
    
        useEffect(() => {
    
            const handleResize = () => {
                setWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => window.removeEventListener('resize', handleResize)
    
        }, [perview])


        if(width<=700)
        {

            if(width<=500){

                perview = 2;
            }

            else if(width>=630){

        
                perview = 3

            }


        }

        else if (width>=768 && width<=1024 ){

             width > 990 ? perview = 3 : perview = 2

        }

        else if(width>=1024 && width<=1200 ){

            width >= 1024 && width <= 1200 ? perview = 3: perview = 2  


        }

        else if(width>=1200){

            width >= 1200 && width<=1440 ? perview = 3: perview = 3 
    
        }





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

                        <Card  id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} poster={movie.posterPath ? `https://image.tmdb.org/t/p/w500${movie.posterPath}` : ''} favorite={true} />

                    </SwiperSlide>


                )




            })}




        </Swiper>



    )
}

export default Carousel