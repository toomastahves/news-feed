import React from 'react';
import ContentLayout from '../Layouts/Content';
import Details from '../Stateless/Article/Details';

export const ArticlePage = () => {
  return <Details />;
};

export default ContentLayout(ArticlePage);
