import React, { useState } from "react";
import './App.css';
import MovieList from "./MovieList";
import NavbarApp from "./NavbarApp";
import AddMovie from "./AddMovie";


function App() {
  const [search, setSearch] = useState("")
  const [star, setStar] = useState(1)
  const [movies, setMovies] = useState([
    {
      img: "https://img6.cdn.cinoche.com/images/82d38ca364d8f99ee8d53cdaec5d1957.jpg",
      title: "The Dark Knight: Le chevalier noir (2008)",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 2
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/91waImLo1CL.jpg",
      title: "The Predator (2018)",
      description: "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
      rating: 1
    },
    {
      img: "https://imgr.cineserie.com/2016/04/1062793.jpg?imgeng=/f_jpg/cmpr_0/w_148/h_222/m_cropbox&ver=1",
      title: " Le grand jeu (2017)",
      description: "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.",
      rating: 5
    },
    {
      img: "https://lecinemaavecungranda.files.wordpress.com/2016/08/batman-the-killing-joke-2016-movie-poster.jpg",
      title: " Batman: The Killing Joke (2016)",
      description: "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
      rating: 4
    }
  ])
  let getSearch = (text) => {
    setSearch(text)
  }
  let getStar = (star) => {
    setStar(star)
  }
  
  return (
    <div className="App">
      <NavbarApp getSearch={getSearch} getStar={getStar} star={star} />
      <MovieList movies={movies.filter(el => el.rating >= star && el.title.toLowerCase().includes(search.toLowerCase()))} />
      <AddMovie addingFilm={setMovies} movies={movies} />
    </div>
  );
}

export default App;
