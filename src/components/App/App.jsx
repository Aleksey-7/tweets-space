import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { TweetsPage } from 'pages/TweetsPage';
import { Header } from '../Header/Header';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};
