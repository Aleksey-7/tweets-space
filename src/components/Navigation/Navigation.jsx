import { Container, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
    </Container>
  );
};
