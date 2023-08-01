import React from "react";
import MoviesFilter from "../../components/moviesFilters";
import Header from "../../components/header/Header";
import Sidebar from "../../components/header/Sidebar";
import Theathers from "../theathers";
// import Confectionary from "../confectionery";


function Movies() {
  return (
    <div>
      <Header />
      <MoviesFilter />
      <Sidebar />
      <Theathers />
      {/* <Confectionary /> */}
                     
    </div>
    // listado de peliculas
    // botones
  );
}

export default Movies;
