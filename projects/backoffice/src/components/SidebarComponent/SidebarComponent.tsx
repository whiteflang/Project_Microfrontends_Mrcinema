import React from 'react';


const Sidebar = () => {
  return (
    <nav className="Sidebar"> {/* Aplicamos la clase "Sidebar" */}
      <ul>
        <li><a href="#">Dasboard</a></li>
        <li><a href="#">Theaters and Halls</a></li>
        <li><a href="#">Current schedule</a></li>
        <li><a href="#">Confetionery products</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Movies</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
