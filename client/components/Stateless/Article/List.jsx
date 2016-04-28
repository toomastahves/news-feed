import React, { PropTypes } from 'react';
import ListItem from './ListItem';
import Spinner from '../Parts/Spinner';
import { guid } from '../../../../libs/utils/guid';

export const List = ({ articles, fetching }) => {
  return (
    <div>
      {fetching && <div className='spinner-location overlay'><Spinner /></div>}
      {articles.map((a, number) => {
        return <ListItem key={guid()} number={number + 1} article={a} />;
      })}
    </div>
  );
};

List.propTypes = {
  articles: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired
};

export default List;
