import React from 'react'
import logo from './../assets/Images/logo.png';

function Footer() {
  return (
      <div className='flex text-center bg-blue-950 justify-between text-white content-center p-5 xl:px-10'>
          <div className='cursor-pointer'>
              <h2>Movie</h2>
              <h2>TV-Series</h2>
              <h2>Trending</h2>
              <h2>Top Imdb</h2>
          </div>
          <div className='cursor-pointer'>
              <h2>Movie</h2>
              <h2>TV-Series</h2>
              <h2>Trending</h2>
              <h2>Top Imdb</h2>
          </div>
          <div>
          <img src={logo} className='w-[150px] justify-center' />
          </div>
          <div className='cursor-pointer'>
              <h2>FAQ</h2>
              <h2>Help Center</h2>
              <h2>Term of Use</h2>
              <h2>Privecy</h2>
          </div>
          <div className='cursor-pointer'>
              <h2>Movie</h2>
              <h2>TV-Series</h2>
              <h2>Trending</h2>
              <h2>Top Imdb</h2>
          </div>
    </div>
  )
}

export default Footer;