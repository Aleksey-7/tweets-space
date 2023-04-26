import boy from '../images/Boy.png';
import { LogoImg } from 'components/Tweet/Tweet.styled';

export const HomePage = () => {
  return (
    <h1 style={{ marginTop: 200, textAlign: 'center', color: 'antiquewhite' }}>
      Wellcome to Tweets Space!
      <LogoImg src={boy} alt="boy" width="40" />
    </h1>
  );
};
