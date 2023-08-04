import React, { useState } from 'react';

export interface FilterComponentProps {
  onApplyFilter: (filterData: FilterData) => void;
}

export interface FilterData {
  region: string;
  releaseYear: string;
  popularity: number;
}

const initialFilterData: FilterData = {
  region: 'All',
  releaseYear: '2023',
  popularity: 5, // Valor predeterminado para la popularidad
};

const countries: string[] = ['USA', 'Canada', 'Mexico', 'Germany', 'France', 'Spain', 'Italy', 'Australia', 'Japan', 'China'];

export const FilterMoviesComponent: React.FC<FilterComponentProps> = ({ onApplyFilter }) => {
  const [filterData, setFilterData] = useState<FilterData>(initialFilterData);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFilterData((prevFilterData) => ({ ...prevFilterData, region: value }));
  };

  const handleReleaseYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterData((prevFilterData) => ({ ...prevFilterData, releaseYear: value }));
  };

  const handlePopularityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterData((prevFilterData) => ({ ...prevFilterData, popularity: Number(value) }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(filterData);
  };

  return (
    <div className="FilterContainer">
      <div>
        <label>Region:</label>
        <select name="region" value={filterData.region} onChange={handleRegionChange}>
          {/* Opciones para la selección de regiones */}
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Nuevo campo para Release Year */}
      <div>
        <label>Release Year:</label>
        <input
          name="releaseYear"
          value={filterData.releaseYear}
          onChange={handleReleaseYearChange}
        />
      </div>

      {/* Nuevo campo para Popularity */}
      <div>
        <label>Popularity:</label>
        <input
          type="number"
          name="popularity"
          value={filterData.popularity}
          onChange={handlePopularityChange}
          min="1"
          max="10"
        />
      </div>

      <button onClick={handleApplyFilter}>Apply</button>
    </div>
  );
};

