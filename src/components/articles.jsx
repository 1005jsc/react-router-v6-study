import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';







const Articles = () => {
  return (
    <div>
    <ul>

      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
    <Outlet/>
    
    </div>

  );
};

export default Articles;





