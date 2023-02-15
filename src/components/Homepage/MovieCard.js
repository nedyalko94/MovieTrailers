import React from 'react'
import {Link} from 'react-router-dom'

function MovieCard( {movie}) {
  return (



<ul className="movies px-3"> 
        <li key={movie.id} >
        <div className="movie">
          <figure className="movie__figure"> 
          <Link to={`/${movie.id}`}> 
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="movie__poster" alt='no poster'/> 
          </Link>
            <figcaption><span className="movie__vote">{movie.vote_average}</span></figcaption>
            <h2 className="movie__title">{movie.original_title}</h2>
          </figure>
        </div>
      </li>

        </ul>


   



  )
}

export default MovieCard