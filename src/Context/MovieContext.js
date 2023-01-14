import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {

  const [hiddenMenu, setHiddenMenu] = useState(true);

  const [activeLink, setActiveLink] = useState("TV Shows");

  const [search, setSearch] = useState("");
 
  const [currentPage, setCurrentPage] = useState(1);

  const [popularMovies, setPopularMovies] = useState([]);
  const [filmovi, setFilmovi] = useState([]);
  const [phone, setPhone] = React.useState(null)
  const [select, setSelect] = useState("")

  const API_KEY = "580eb2cbd86f3cc1c8b2fe2780e3e4c4";

  const getMovies = async () => {
    const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=580eb2cbd86f3cc1c8b2fe2780e3e4c4&language=en-US`//&query=${search}
    );
    const data = await response.json();
     const oo = data.results.slice(0,10);
      setFilmovi(oo);
      console.log(oo)
  };
  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US?limit=10`);//&page=3
    const popularMoviesData = await popularMoviesResponse.json();
      const ii = popularMoviesData.results.slice(0,10);
      console.log(ii.name)
     setPopularMovies(ii);
  };
  
  const handleSearch =  () => {
    filmovi.map((ss)=>{
  if(search.length<3){
    return setTimeout(() => {setSearch("")}, 2000); 
    }
     if (ss.title.toLowerCase().includes(search.toLowerCase()) && search.length>2  ) {
    return setFilmovi([ss])
  }
});
popularMovies.map((ss)=>{
  if( search.length<3){
    return setTimeout(() => {setSearch("")}, 2000); 
    }
     if (ss.name.toLowerCase().includes(search.toLowerCase()) && search.length>2  ) {
    return setPopularMovies([ss])
     }
  });
};
useEffect(() => {
  const loadingTimeout = setTimeout(() => {
handleSearch();
}, 1000);
  return () => clearTimeout(loadingTimeout);
}, [filmovi]);
 
  useEffect(() => {
    getMovies();
    getPopularMovies();
  }, [search, currentPage]);

  return (
    <MovieContext.Provider
      value={{
        filmovi,
        setFilmovi,
        search,
        setSearch,
        activeLink,
        setActiveLink,
        handleSearch,
        currentPage,
        setCurrentPage,
        popularMovies,
        setPopularMovies,
        hiddenMenu,
        setHiddenMenu,
        phone,
        setPhone,
        select,
        setSelect
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
