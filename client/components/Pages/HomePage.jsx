import React from 'react';
import { connect } from 'react-redux';
import Header from '../Parts/Header';
import Front from '../Parts/Front';
import Content from '../Parts/Content';

export const HomePage = () => {
  const article1 = {
    url: 'img/img1.jpg'
  };
  const article2 = {
    url: 'img/img2.jpg'
  };
  const article3 = {
    url: 'img/img3.jpg'
  };
  const articles = [];
  articles.push(article1);
  articles.push(article2);
  articles.push(article3);

  const data = {
    url: 'img/img.jpg'
  };
  return (
    <div>
      <Content articles={articles} />
    </div>
  );
};

export default HomePage;
