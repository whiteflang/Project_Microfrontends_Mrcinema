import React from 'react';
import { MoviesListComponent } from './components/Movies/MoviesListComponent';
import Header from './components/HeaderComponent/HeaderComponent';
import Sidebar from './components/SidebarComponent/SidebarComponent';
import { FilterMoviesComponent, FilterData } from './components/Movies/FilterMoviesComponent'; // Asegúrate de que esté importada aquí
import './App.css';

function App() {
  const handleApplyFilter = (filterData: FilterData) => {
    // Aquí puedes hacer lo que necesites con los datos del filtro
    console.log(filterData);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <FilterMoviesComponent onApplyFilter={handleApplyFilter} />
        <MoviesListComponent />
      </div>
    </div>
  );
}

export default App;
