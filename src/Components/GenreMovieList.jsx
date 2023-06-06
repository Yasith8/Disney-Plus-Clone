import React from 'react'
import GenreList from '../Constant/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
      <div>
      {GenreList.genere.map((item,index)=>index<=4&&(
        <div className='p-8 px-8 md:px-16'>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
          ))}
    </div>
  )
}

export default GenreMovieList