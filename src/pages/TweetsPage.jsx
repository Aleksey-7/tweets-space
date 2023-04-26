import { TweetsList } from 'components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';
import { Link } from 'components/Navigation/Navigation.styled';
import { useState } from 'react';
import boy from '../images/Boy.png';
import { LogoImg } from 'components/Tweet/Tweet.styled';

export const TweetsPage = () => {
  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <LogoImg src={boy} alt="boy" width="18" />
      <Link to="/">Go Back</Link>
      <Filter filter={filter} handleChange={handleChange} />
      <TweetsList filter={filter} />
    </div>
  );
};
