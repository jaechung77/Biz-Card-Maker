import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({ authService }) => {
  const { state } = useLocation();
  const navigage = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  // const onLogout = console.log(state.id);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigage('/');
      }
    });
  });
  return (
    <section className="style.maker">
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
