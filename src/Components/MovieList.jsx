import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
//import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function MovieList({ genreId,index_ }) {
    const [movieList, setMovieList] = useState([])
    const elementRef=useRef(null);
    useEffect(() => {
        getMovieByGenreId();
    },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            //console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    
    // const slideRight = () => {
    //     const element = elementRef.current;
    //     element.scrollTo({
    //       left: element.scrollLeft + element.offsetWidth,
    //       behavior: 'smooth',
    //     });
    //   };
    
    //   const slideLeft = () => {
    //     const element = elementRef.current;
    //     element.scrollTo({
    //       left: element.scrollLeft - element.offsetWidth,
    //       behavior: 'smooth',
    //     });
    //   };
    
    const slideRight = () => {
        const element = elementRef.current;
        element.scrollLeft += element.offsetWidth;
      };
    
      const slideLeft = () => {
        const element = elementRef.current;
        element.scrollLeft -= element.offsetWidth;
      };

    return (
      <div className='relative'>
          <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
         p-2 z-10 cursor-pointer 
          hidden md:block absolute
          ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
            
      <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10' ref={elementRef}>
                {movieList.map((item, index) => (
              <>
                        {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
              </>
              ))}
            </div>

            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>  
           
    </div>
  )
}

export default MovieList