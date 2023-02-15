import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
// import CarouselComponent from './components/Homepage/CarouselComponent'
import MovieCard from './components/Homepage/MovieCard'
function Home({ inputValue, result,page,nextPage,prevPage }) {
  const [movies, setMovies] = useState([])
  
  // https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1
  useEffect(() => {
    const fetchMovies = async () => {
      let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`)
      let data = await response.json()
      setMovies(data.results)
    }
    fetchMovies()

    // fetch('/json/8.8.8.8')
    //   .then(res => res.json())
    //   .then(data => {
    //   })

  }, [page])

  return (
    <>
      <Container fluid={true} className="p-0 m-0 bg-dark">
      
      </Container>
      <ul className="movies p-2 movies-grid bg-dark">
        {
          inputValue !== '' && result !== undefined ?
            result.map((movie, index) => (
              <MovieCard movie={movie} key={index}  />
            ))
            :
            (
              movies !== undefined ?
                movies.map((movie, index) => (
                  <MovieCard movie={movie} key={index}  />
                ))
                :
                ''
            )
        }
      </ul>

      <div className="pagination bg-dark d-flex justify-content-center pb-2 pt-2">
      <ButtonGroup aria-label="" className="pb-3">
              <Button
                variant="  btn btn-outline-light m-1 px-5 "
                onClick={prevPage}
              >
                Prev
              </Button>
              <Button variant="outline-light  m-1 px-5" onClick={() => {
                nextPage()

              }}>
                Next
              </Button>
            </ButtonGroup>
      </div>
    </>
  )
}

export default Home