import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, CardGroup,Container } from 'react-bootstrap';
import MovieCard from './components/Homepage/MovieCard';
import { useParams } from 'react-router-dom';

function GenreSearch({inputValue,result,page,prevPage,nextPage,allGenres}) {
const{genre}=useParams()
const [movies, setMovies] = useState([]);
const [genreName,setGenreName]= useState('')



useEffect(()=>{
allGenres.forEach( element => {
  if((element.id).toString() === genre){
    setGenreName(element.name)
  
}});

},[genre,allGenres])


useEffect(() => {
  const fetchMovies = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&with_genres=${genre}`
    );
    let data = await res.json();
    setMovies(data.results);
   
  };
  
    fetchMovies()



   
  },[page,genre,movies]);



  return (
<>
      <div>

        {/* <CarouselComponent /> */}

        <Container fluid className=" bg-dark home  pt-1">
       <div className="pt-0 pages"> <p className="searchesults m-0 text-white ">Page {page} of category {genreName}</p>  
       {/* {console.log(allGenres)}   */}
       </div>
     
          <CardGroup
            className="bg-dark justify-content-space-between movies "
            fluid={true}>

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
       
          </CardGroup>

          <div className="pagination bg-dark d-flex justify-content-center mt-4">
        
            <ButtonGroup aria-label="" className="pb-3">
              <Button
                variant="  btn btn-outline-light m-1 px-5 "
                onClick={prevPage}
              >
                Prev
              </Button>
              <Button variant="outline-light  m-1 px-5" onClick={() => {nextPage()}}>
               
                Next
              </Button>
            </ButtonGroup>
          </div>
        </Container></div>
    </>
  )
}

export default GenreSearch