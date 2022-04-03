import React, { Component } from 'react';

import { useParams } from 'react-router-dom';






const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>안녕하세요 게시글 {id}</h2>
    </div>
  );
};

export default Article;