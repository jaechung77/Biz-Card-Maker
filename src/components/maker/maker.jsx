import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

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
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
