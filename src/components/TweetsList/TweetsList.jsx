import { useState, useEffect } from 'react';
import { getFilteredTweets } from 'services/tweetApi';
import { Tweet } from 'components/Tweet/Tweet';
import { List, ListWrapper, LoadMoreBtn } from './TweetsList.styled';
import { Loader } from 'components/Loader/Loader';

export const TweetsList = ({ filter }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isShowButton, setIsShowButton] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(filter);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setUsers([]);
    setPage(1);
    setIsLoading(true);

    getFilteredTweets(filter)
      .then(user => {
        setUsers(user);
        setCurrentFilter(filter);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [filter]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    getFilteredTweets(currentFilter, page)
      .then(user => {
        setUsers(prevUsers => [...prevUsers, ...user]);
        if (user.length < 3) {
          return setIsShowButton(false);
        }
        setIsShowButton(true);
      })
      .catch(error => console.log(error));
  }, [currentFilter, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <ListWrapper>
      <List>
        {users.map(user => {
          return <Tweet key={user.id} item={user} />;
        })}
      </List>
      {isloading && <Loader />}
      {!isloading && isShowButton && (
        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
      )}
    </ListWrapper>
  );
};
